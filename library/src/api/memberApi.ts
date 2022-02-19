import { Member, CreateMember } from "../models/member";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Member";

export async function getMembers(): Promise<Member[]> {
	return axios.get(baseURL).then((res) => res.data);
}

export async function getMemberById(id: string): Promise<Member> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

export async function createMember(member: CreateMember): Promise<any> {
	return axios.post(baseURL, member).then((res) => res.data);
}

export async function updateMember(member: Member): Promise<any> {
	return axios.put(`${baseURL}/${member.id}`, member).then((res) => res.data);
}

export async function deleteMemberById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
