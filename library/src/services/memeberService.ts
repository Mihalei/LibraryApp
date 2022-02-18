import { Member, CreateMember } from "../models/member";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Member";

export const getMembers = () => {
	return axios.get(baseURL).then((res) => res.data);
};

export const getMemberById = (id: string) => {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
};

export const createMember = (member: CreateMember) => {
	return axios.post(baseURL, member).then((res) => res.data);
};

export const updateMember = (member: Member) => {
	return axios.put(`${baseURL}/${member.id}`, member).then((res) => res.data);
};

export const deleteMemberById = (id: string) => {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
};
