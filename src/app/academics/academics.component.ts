import { Component, OnInit } from '@angular/core';

interface Course {
  name: string;
  link: string;
}

interface Entry {
  header: string;
  side: string;
  courses: Course[];
}

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss'],
})
export class AcademicsComponent implements OnInit {
  entries: Entry[] = [
    {
      header: 'Summer 2020',
      side: 'May 2020 - August 2020',
      courses: [
        {
          name: 'CSC384: Introduction to Artificial Intelligence',
          link: 'https://fas.calendar.utoronto.ca/course/csc384h1',
        },
        {
          name: 'CSCD03: Social Impact of Information Technology',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCD03H3',
        },
      ],
    },
    {
      header: 'Winter 2020',
      side: 'January 2020 - April 2020',
      courses: [
        {
          name: 'CSCB63: Design and Analysis of Data Structures',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCB63H3',
        },
        {
          name: 'CSCC24: Principles of Programming Languages',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCC24H3',
        },
        {
          name: 'CSCC69: Operating Systems',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCC69H3',
        },
        {
          name: 'EESA10: Human Health and the Environment',
          link: 'https://utsc.calendar.utoronto.ca/course/EESA10H3',
        },
        {
          name:
            'MGEA06: Introduction to Macroeconomics: A Mathematical Approach',
          link: 'https://utsc.calendar.utoronto.ca/course/MGEA06H3',
        },
      ],
    },
    {
      header: 'Fall 2019',
      side: 'September 2019 - December 2019',
      courses: [
        {
          name: 'CSCC01: Introduction to Software Engineering',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCC01H3',
        },
        {
          name: 'CSCC10: Human-Computer Interaction',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCC10H3',
        },
        {
          name:
            'CSCC37: Introduction to Numerical Algorithms for Computational Mathematics',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCC37H3',
        },
        {
          name: 'CSCD27: Computer and Network Security',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCD27H3',
        },
        {
          name: 'ASTA01: Introduction to Astronomy and Astrophysics',
          link: 'https://utsc.calendar.utoronto.ca/course/ASTA01H3',
        },
      ],
    },
    {
      header: 'Fall 2018',
      side: 'September 2018 - December 2018',
      courses: [
        {
          name: 'CSCB07: Software Design',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCB07H3',
        },
        {
          name: 'MATB24: Linear Algebra II for Mathematical Sciences',
          link: 'https://utsc.calendar.utoronto.ca/course/MATB24H3',
        },
        {
          name: 'MATB41: Techniques of the Calculus of Several Variables I',
          link: 'https://utsc.calendar.utoronto.ca/course/MATB41H3',
        },
        {
          name: 'MGTA02: Managing the Business Organization',
          link: 'https://utsc.calendar.utoronto.ca/course/MGTA02H3',
        },
        {
          name: 'MDSA01: Introduction to Media Studies',
          link: 'https://utsc.calendar.utoronto.ca/course/MDSA01H3',
        },
      ],
    },
    {
      header: 'Summer 2018',
      side: 'May 2018 - August 2018',
      courses: [
        {
          name: 'CSCB09: Software Tools and Systems Programming',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCB09H3',
        },
        {
          name: 'CSCB58: Computer Organization',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCB58H3',
        },
        {
          name: 'CSCB36: Introduction to the Theory of Computation Sciences',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCB36H3',
        },
        {
          name: 'STAB52: An Introduction to Probability',
          link: 'https://utsc.calendar.utoronto.ca/course/STAB52H3',
        },
        {
          name: 'MGTA01: Introduction to Business',
          link: 'https://utsc.calendar.utoronto.ca/course/MGTA01H3',
        },
      ],
    },
    {
      header: 'Winter 2018',
      side: 'January 2018 - April 2018',
      courses: [
        {
          name: 'CSCA48: Introduction to Computer Science II',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCA48H3',
        },
        {
          name: 'MATA22: Linear Algebra I for Mathematical Sciences',
          link: 'https://utsc.calendar.utoronto.ca/course/MATA22H3',
        },
        {
          name: 'MATA37: Calculus II for Mathematical Sciences',
          link: 'https://utsc.calendar.utoronto.ca/course/MATA37H3',
        },
        {
          name: 'PHLA11: Introduction to Ethics',
          link: 'https://utsc.calendar.utoronto.ca/course/PHLA11H3',
        },
        {
          name: 'EESA06: Introduction to Planet Earth',
          link: 'https://utsc.calendar.utoronto.ca/course/EESA06H3',
        },
      ],
    },
    {
      header: 'Fall 2017',
      side: 'September 2017 - December 2017',
      courses: [
        {
          name: 'CSCA08: Introduction to Computer Science I',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCA08H3',
        },
        {
          name: 'CSCA67: Descrete Mathematics',
          link: 'https://utsc.calendar.utoronto.ca/course/CSCA67H3',
        },
        {
          name: 'MATA31: Calculus I for Mathematical Sciences',
          link: 'https://utsc.calendar.utoronto.ca/course/MATA31H3',
        },
        {
          name: 'LINA01: Introduction to Linguistics',
          link: 'https://utsc.calendar.utoronto.ca/course/LINA01H3',
        },
        {
          name: 'PSYA01: Introduction to Biological and Cognitive Psychology',
          link: 'https://utsc.calendar.utoronto.ca/course/PSYA01H3',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
