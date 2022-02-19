export interface API<T> {
	getAll(): Promise<T[]>;
	get(id: string): Promise<T>;
	create(o: object): Promise<any>;
	update(o: T): Promise<any>;
	delete(id: string): Promise<any>;
}
