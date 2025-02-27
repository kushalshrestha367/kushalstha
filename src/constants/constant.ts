import { UserObject } from "@/models/User";
import { NavItems } from "@/models/Header";

export const userInfo: UserObject = {
    name: "KUSHAL SHRESTHA",
    picture: "/Image/port.png",
    heading: 'I&#39;m a web developer with a passion for building user-friendly websites using React and Next.js. I leverage modern technologies to create fast, efficient, and seamless web experiences that enhance user engagement and drive innovation',
    about: `
      <p>I am a passionate web developer specializing in React and Next.js, dedicated to building high-performance, user-friendly websites that deliver seamless digital experiences.</p>
        <p>Since beginning my journey in 2022, I have worked on diverse projects, refining my skills in front-end and full-stack development. My expertise in JavaScript, TypeScript, and modern frameworks enables me to create fast, scalable, and engaging web solutions.</p>
        <p>I thrive on transforming complex ideas into elegant, efficient, and impactful solutions that enhance user interaction and drive innovation.</p>
        `,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'MongoDB', 'MySQL', 'Strapi'],
}

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },
    about: { label: 'About', page: 'about' },
    projects: { label: 'Projects', page: 'projects' },
    contact: { label: 'Contact', page: 'contact' }
}
export const projects = {
    koshis: { image: 'https://i.ibb.co/dwqdhb1F/koshish-media.jpg' },
    greenyard: { image: 'https://i.ibb.co/7JCbzNJw/greenyard1.jpg' },
    mern: { image: 'https://i.ibb.co/S4ZxwXzD/mern.jpg' },
    //guitar: { image: 'https://i.ibb.co/ZRmcLt77/guitar.jpg' },
    nepkart: { image: 'https://i.ibb.co/KchT6jr6/Screenshot-1849.jpg' },

}

export const contacts = {
    username: "",
    email: "",
    message: "",
};
