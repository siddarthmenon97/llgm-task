import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export const CommonSVGElements = () => {
    const myElementRef = useRef(null);
    const [barData,] = useState([
        {
            name: 'Jon Snow',
            age: 25
        },
        {
            name: 'Cersie',
            age: 50
        },
        {
            name: 'Theon',
            age: 30
        },
        {
            name: 'Khaleesi',
            age: 20
        },
        {
            name: 'Arya',
            age: 15
        }
    ]);

    // calculate max geight of the graph (svg)
    const maxAge = d3.max(barData, (d) => d.age);
    console.log('maxAge', maxAge)
    const totalHeight = maxAge! + 50;
    console.log('totalHeight', totalHeight)
    const rectWidth = 50;

    const margin = {
        top: 20, right: 90, bottom: 100, left: 40
    }

    useEffect(() => {
        const svg = d3.select(myElementRef.current);
        const allRect = svg.selectAll('rect')
            .data(barData)
            .enter()
            .append('rect');


        allRect
            .attr('stroke-width', 3)
            .attr('stroke', 'red')
            .attr('fill', 'green')
            .attr('width', rectWidth)
            .attr('x', (_d, i) => {
                return i * rectWidth + margin.left;
            })
            .attr('y', (d) => {
                const barY = totalHeight - d.age;
                return barY + margin.top;
            })
            .attr('height', (d) => {
                return d.age;
            })
        console.log(allRect);

        // draw x-line or axis
        svg.append('line')
            .attr('x1', margin.left)
            .attr('y1', margin.top + totalHeight)
            .attr('x2', margin.left + (rectWidth * barData.length) + rectWidth)
            .attr('y2', margin.top + totalHeight)
            .attr('stroke', 'white')
            .attr('stroke-width', 2)

        // draw y-axis line
        svg.append('line')
            .attr('x1', margin.left)
            .attr('y1', margin.top)
            .attr('x2', margin.left)
            .attr('y2', margin.top + totalHeight)
            .attr('stroke', 'white')
            .attr('stroke-width', 2)

        // create x-axis labels (names)
        svg.selectAll('.name-label')
            .data(barData)
            .enter()
            .append('text')
            .text((d) => d.name)
            .attr('class', 'name-label')
            .attr('x', (_d, i) => i * rectWidth + margin.left + 20)
            .attr('y', totalHeight + margin.top)
            .attr('transform', (_d, i) => `rotate(45 ${i * rectWidth + margin.left} ${totalHeight + margin.top})`)
            .attr('fill', 'gray')

        // create y-axis labels (names)
        svg.selectAll('.age-label')
            .data(barData)
            .enter()
            .append('text')
            .text((d) => d.age)
            .attr('class', 'age-label')
            .attr('x', (_d, i) => i * rectWidth + margin.left + 10)
            .attr('y', (d) => margin.top + totalHeight - d.age - 10)
            .attr('fill', 'green')

        // y-axis label - 20 value apart
        const yaxisLabelSpacing = 20;
        const yaxisLabelData = d3.range(0, maxAge! + yaxisLabelSpacing, yaxisLabelSpacing)

        svg.selectAll('y-axis-labels')
            .data(yaxisLabelData)
            .enter()
            .append('text')
            .text((d) => d)
            .attr('x', margin.left - 5)
            .attr('y', (d) => margin.top + totalHeight - d)
            .attr('fill', 'grey')
            .attr('text-anchor', 'end')
            .attr('alignment-baseline', 'middle')
    }, [barData, margin.left, margin.top, maxAge, totalHeight]);

    const disvRef = useRef<HTMLDivElement>(null)


    return (
        <div>
            <div ref={disvRef}></div>
            <svg ref={myElementRef}
                height={totalHeight + margin.top + margin.bottom}
                style={{ border: '1px dashed' }}
            >
            </svg>
        </div>
    )
}

{/* <svg width={800} height={800} style={{ border: '1px solid red' }}>
<rect width={200} height={200} x={100} y={100} fill="green" />
<circle cx={100} cy={500} r={50} fill="yellow" />
</svg>

<svg width={800} height={800} style={{ border: '1px solid red' }}>
<path
    d="M25,25 L25,35
M75,25 L75,35
M15,75 C20,100 80,100 85,75"
    stroke="green" strokeWidth={2} fill="none" />
</svg> */}