import React from "react";
import { Dropdown } from "react-bootstrap";

interface IProps {
	options: any;
	select: any;
	setSelect: any;
}

export const SearchOptions: React.FC<IProps> = ({ options, select, setSelect }) => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				{select}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{Object.entries(options).map((k, v) => (
					<Dropdown.Item
						onClick={() => setSelect(...k.slice(1))}
						value={k.slice(1)}
						eventKey={v}>
						{k.slice(1)}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
