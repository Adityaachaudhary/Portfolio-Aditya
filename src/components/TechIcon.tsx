
import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 24, className = "" }) => {
  const getIconUrl = (techName: string) => {
    const iconMap: { [key: string]: string } = {
      // Languages
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      
      // Frameworks
      'ReactJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'ExpressJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'NodeJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      
      // Databases
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      
      // Tools
      'Visual Studio Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Google Cloud Platform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      
      // Additional
      'Neo4j': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
      'JSON': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
      'Cursor': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg',
      '3D Rendering': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
      'Antigravity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',

      // Newly added
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'ERPNext': 'https://cdn.simpleicons.org/erpnext/0089FF',
      'AWS S3': 'https://cdn.simpleicons.org/amazons3/569A31',
      'Cloudflare': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
      'Hono': 'https://cdn.simpleicons.org/hono/E36002',
      'ChromaDB': 'https://cdn.simpleicons.org/chromadb/FFDE00',
      'LangChain': 'https://cdn.simpleicons.org/langchain/1C3C3C',
      'LangGraph': 'https://cdn.simpleicons.org/langgraph/1C3C3C',
      'shadcn UI': 'https://cdn.simpleicons.org/shadcnui/FFFFFF',
      'TanStack Query': 'https://cdn.simpleicons.org/reactquery/FF4154',
    };

    return iconMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  return (
    <img 
      src={getIconUrl(name)} 
      alt={name}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      onError={(e) => {
        // Fallback to a generic code icon if the specific icon fails to load
        (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
      }}
    />
  );
};

export default TechIcon;
