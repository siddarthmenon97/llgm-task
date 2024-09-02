import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface DataPoint {
    date: string;
    value: number;
}


const data = [
    { date: '2024-01-01', value: 30 },
    { date: '2024-02-01', value: 50 },
    { date: '2024-03-01', value: 80 },
    { date: '2024-04-01', value: 60 },
    { date: '2024-05-01', value: 90 },
    { date: '2024-06-01', value: 100 },
];

export const TimeSeriesChart = () => {
    const svgRef = useRef(null);

    const width = 800;
    const height = 400;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    console.log('innerWidth: ', innerWidth, 'innerHeight :', innerHeight);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // svg.selectAll('*').remove(); // Clear any previous content

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // create x scale which x axis will be on 
        const xScale = d3.scaleTime()
            .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
            .range([0, innerWidth]);

        // create y sacle which y axis will be on 
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)!])
            .range([innerHeight, 0]);

        // adding X-axis on the screen itself
        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale));

        // adding y-axis on the screen itself
        g.append('g')
            .call(d3.axisLeft(yScale));

        // set line coordinateds
        const line = d3.line<DataPoint>()
            .x(d => xScale(new Date(d.date)))
            .y(d => yScale(d.value));

        // Drawing the line
        g.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', line)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2);

    }, [innerHeight, innerWidth, margin.left, margin.top])


    return (
        <svg ref={svgRef} width={width} height={height}>

        </svg>
    )
}