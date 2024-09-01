export const CommonSVGElements = () => {
    return (
        <div>
            <svg width={800} height={800} style={{ border: '1px solid red' }}>
                <rect width={200} height={200} x={100} y={100} fill="green" />
                <circle cx={100} cy={500} r={50} fill="yellow" />
            </svg>

            <svg width={800} height={800} style={{ border: '1px solid red' }}>
                <path
                    d="M25,25 L25,35
                M75,25 L75,35
                M15,75 C20,100 80,100 85,75
            "
                    stroke="green" strokeWidth={2} fill="none" />
            </svg>
        </div>
    )
}