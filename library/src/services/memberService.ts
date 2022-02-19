import { Member, CreateMember } from "../models/member";
//import { memberAPI as Api } from "../api/memberApi";
import { mockMemberAPI as Api } from "../mock-database/memberApi";

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
			return res.filter((m) => new Date().getFullYear() - m.dateOfBirth.getFullYear() < age);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}
