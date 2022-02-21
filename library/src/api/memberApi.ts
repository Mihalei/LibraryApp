import { Member, CreateMember } from "../models/member";
import axios from "axios";
import { API } from "../models/api";

const baseURL = "http://localhost:3000/membes";

export const memberAPI: API<Member> = {
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
	return axios.get(baseURL).then((res) => res.data);
}

async function getMemberById(id: string): Promise<Member> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

async function createMember(member: CreateMember): Promise<any> {
	return axios.post(baseURL, member).then((res) => res.data);
}

async function updateMember(member: Member): Promise<any> {
	return axios.put(`${baseURL}/${member.id}`, member).then((res) => res.data);
}

async function deleteMemberById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
