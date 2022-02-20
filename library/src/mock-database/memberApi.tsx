import { Member, CreateMember } from "../models/member";
import { API } from "../models/api";
import { Members, nextMemberId } from "./data";

const nextId = nextMemberId();

export const mockMemberAPI: API<Member> = {
	getAll: async function (): Promise<Member[]> {
		return getMembers();
	},
	get: async function (id: string): Promise<Member> {
		return getMemberById(id);
	},
	create: async function (member: CreateMember): Promise<any> {
		return createMember(member);
	},
	update: async function (member: Member): Promise<any> {
		return updateMember(member);
	},
	delete: async function (id: string): Promise<any> {
		return deleteMemberById(id);
	},
};

async function getMembers(): Promise<Member[]> {
	return [...Members];
}

async function getMemberById(id: string): Promise<Member> {
	const member = Members.find((b) => b.id === id);
	if (member) return member;
	else return Promise.reject(`Member with id ${id} was not found.`);
}

async function createMember(member: CreateMember): Promise<any> {
	const newId = nextId.next().value;
	if (typeof newId === "number") {
		const newMember: Member = { ...member, id: newId.toString() };
		Members.push(newMember);
		return Promise.resolve();
	}
	return Promise.reject("Error while generating new id for member.");
}

async function updateMember(member: Member): Promise<any> {
	const memberIndex = Members.findIndex((b) => b.id === member.id);
	if (memberIndex > -1) {
		Members[memberIndex] = member;
		return Promise.resolve();
	} else return Promise.reject(`Member with id ${member.id} could not be updated.`);
}

async function deleteMemberById(id: string): Promise<any> {
	const memberIndex = Members.findIndex((b) => b.id === id);
	if (memberIndex > -1) {
		Members.splice(memberIndex, 1);
		return Promise.resolve();
	} else return Promise.reject(`Member with id ${id} could not be deleted.`);
}
