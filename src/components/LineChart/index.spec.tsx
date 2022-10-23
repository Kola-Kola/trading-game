import React from "react";
import {render} from "@testing-library/react";
import LineChart from "./index";

jest.mock('react-chartjs-2', () => ({
	Line: () => null
}));

describe("LineChart", () => {
	it("should render LineChart", () => {
		const { getByTestId } = render(<LineChart />);
		
		expect(getByTestId("line-chart")).toBeInTheDocument();
	});
});