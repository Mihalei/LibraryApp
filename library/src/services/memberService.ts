import { Member, CreateMember } from "../models/member";
import {
	createMember,
	deleteMemberById,
	getMemberById,
	getMembers,
	updateMember as update,
} from "../api/memberApi";

export const getAllMembers = () => {
	try {
		return getMembers();
	} catch (error) {
		return undefined;
	}
};

export const getMember = (id: string) => {
	try {
		return getMemberById(id);
	} catch (error) {
		return undefined;
	}
};

export const addNewMember = (member: CreateMember) => {
	try {
		return createMember(member);
	} catch (error) {
		return undefined;
	}
};

export const updateMember = (member: Member) => {
	try {
		return update(member);
	} catch (error) {
		return undefined;
	}
};

export const deleteMember = (id: string) => {
	try {
		return deleteMemberById(id);
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
