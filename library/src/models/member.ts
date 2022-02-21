export interface Member {
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
}

export const memberInit: Member = {
	id: "",
	firstName: "",
	lastName: "",
	dateOfBirth: "",
};

export interface CreateMember {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
}

export const createMemberInit: CreateMember = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
};
