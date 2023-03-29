
import { Timeline } from 'primereact/timeline';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Card } from 'primereact/card';
import './TimeLine.css';
import { Avatar } from '@chakra-ui/react';

export function Experience() {

  const experiences = [
    {
      place: 'Lazarillo', role: "Full Stack Developer", date: 'December 2021 - Present', image: "lazarillo.jpg", tasks:
        ["Maintained and implemented new features on the backend related to route optimization, nearby locations retrieval, among others",
          "Maintained and implemented new features on the frontend related to the creation of maps and indoor routes",
          "Adapted open-source tools like IndoorEqual, OsmInEdit to internal company needs",
          "Developed a web platform for the creation of vector maps that is compatible with IndoorEqual"
        ]
    },
    {
      place: 'ExmerDev', role: "Backend Developer", date: 'Feb 2021 - Mar 2021',image: "exmerdev.jpeg", tasks:
        ["Maintained and implemented new functions in the backend related to managing roles, people and tasks",
          "Create and clearly document the use of APIs made by the team"
        ]
    },
    {
      place: 'Laboratorio de Innovación e Investigación Docente', role: "Full Stack Developer", date: 'Apr 2021 - Ago 2021',image: "liid.jpeg", tasks:
        ["Led and managed a team of web developers for the LiiD Manager web platform",
          "Coordinated project staff activities to ensure projects progressed according to the established timeline",
          "Developed an API for the management of attendance, people, and materials present in the Research and Teaching Innovation Laboratory",
          "Redesigned the visual appearance of the Teaching and Research Innovation web application."
        ]
    },
    {
      place: 'Laboratorio de Innovación e Investigación Docente', role: "Backend Department Leader", date: 'Apr2020 -Feb 2021', image: "liid.jpeg",tasks:
        ["Lead backend team and deployment of web platforms in areas of: health, education",
        ]
    },
    {
      place: 'Laboratorio de Innovación e Investigación Docente', role: "Backend Developer", date: 'Oct 2019 - Feb 202',image: "liid.jpeg", tasks:
        ["Developed an API for the Investigación e Innovación Docente web page using Node.js",
          "Modeled and implemented a PostgreSQL database"
        ]
    },

  ];
  const customizedMarker = (item) => {
    return (
      <span>
        <Avatar
          src={require(`../assets/places/${item.image}`)}
          size='lg'
          name={item.place}
          ml={-1}
          mr={2}
       />
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card title={item.place} subTitle={item.date}>
        <p className="m-0"> <b>{item.role}</b></p>
        <div style={{padding: "1em"}}>
        <ul>
          {item.tasks.map(task => <li>{task}</li>)}
        </ul>
        </div>
      </Card>
    );
  };
  return (
    <div className="card">
      <Timeline value={experiences} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    </div>
  )

}
