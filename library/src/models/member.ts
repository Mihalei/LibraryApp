export interface Member {
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date | undefined;
}

export const memberInit: Member = {
	id: "",
	firstName: "",
	lastName: "",
	dateOfBirth: undefined,
};

export interface CreateMember {
	firstName: string;
	lastName: string;
	dateOfBirth: Date | undefined;
}

export const createMemberInit: CreateMember = {
	firstName: "",
	lastName: "",
	dateOfBirth: undefined,
};
