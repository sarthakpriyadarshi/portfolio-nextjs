// components/TechStack.tsx
import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import styled from "styled-components";

// Define a type for the tech stack items
interface TechItemProps {
    name: string;
    icon: React.ReactNode;
}

// Tech stack data type for props
interface TechStackProps {
    techStack: TechItemProps[];
}

// Styled components
const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
`;

const TechItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background-color: #1d72b8;
        color: white;
        transform: scale(1.05);
    }

    svg {
        font-size: 30px;
        margin-right: 10px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
    }
`;

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
    return (
        <TechContainer>
            {techStack.map((tech, index) => (
                <TechItem key={index}>
                    {tech.icon}
                    <p>{tech.name}</p>
                </TechItem>
            ))}
        </TechContainer>
    );
};

export default TechStack;
