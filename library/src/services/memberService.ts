import { Member, CreateMember } from "../models/member";
import { memberAPI as Api } from "../api/memberApi";
import { memberSearchOptions } from "../models/search";
//import { mockMemberAPI as Api } from "../mock-database/memberApi";

export const getAllMembers = () => {
	try {
		return Api.getAll();
	} catch (error) {
		return undefined;
	}
};

export const getMember = (id: string) => {
	try {
		return Api.get(id);
	} catch (error) {
		return undefined;
	}
};

export const addNewMember = (member: CreateMember) => {
	try {
		return Api.create(member);
	} catch (error) {
		return undefined;
	}
};

export const updateMember = (member: Member) => {
	try {
		return Api.update(member);
	} catch (error) {
		return undefined;
	}
};

export const deleteMember = (id: string) => {
	try {
		return Api.delete(id);
	} catch (error) {
		return undefined;
	}
};

export async function getMemberCount() {
	try {
		const res = await getAllMembers();
		if (res) return res.length;
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getMembersYoungerThan(age: number) {
	try {
		const res = await getAllMembers();
		if (res) {
			return res.filter(
				(m) =>
					new Date().getFullYear() - new Date(Date.parse(m.dateOfBirth)).getFullYear() <
					age
			);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getMembersWithName(name: string) {
	try {
		const res = await getAllMembers();
		if (res) {
			return res.filter((m) =>
				`${m.firstName.toLowerCase().trim()} ${m.lastName.toLowerCase().trim()}`.includes(
					name.toLowerCase().trim()
				)
			);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getMembers(searchType: string, searchValue: string) {
	switch (searchType) {
		case memberSearchOptions.ById:
			const resBI = await getMember(searchValue);
			if (resBI) return [resBI];
			else return undefined;
		case memberSearchOptions.ByName:
			const resBN = await getMembersWithName(searchValue);
			return resBN;
		case memberSearchOptions.YoungerThan:
			const resYT = await getMembersYoungerThan(Number.parseInt(searchValue));
			return resYT;
		default:
			const resA = await getAllMembers();
			return resA;
	}
}
