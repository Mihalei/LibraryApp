export interface Member {
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
}

export const memberInit: Member = {
	id: "",
	firstName: "",
	lastName: "",
	dateOfBirth: new Date(),
};

export interface CreateMember {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
}

export const createMemberInit: CreateMember = {
	firstName: "",
	lastName: "",
	dateOfBirth: new Date(),
};
