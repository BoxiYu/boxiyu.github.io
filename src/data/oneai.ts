/**
 * Where OneAI is used. The homepage, the products page, and the news items
 * describe the same deployments, so the school names and subjects live here.
 */
export const oneaiSubjects = 'mathematics, physics, chemistry, biology, and informatics';

type School = {
  name: string;
  localName: string;
  href?: string;
  olympiad: boolean;
};

export const oneaiSchools: School[] = [
  {
    name: 'The Affiliated High School of South China Normal University',
    localName: '华南师范大学附属中学',
    href: 'https://www.hsfz.net.cn/',
    olympiad: true,
  },
  {
    name: 'Guangzhou University Affiliated Middle School',
    localName: '广州大学附属中学',
    href: 'https://www.gdfz.edu.cn/',
    olympiad: true,
  },
  {
    name: 'Zhixin School Affiliated to The Chinese University of Hong Kong, Shenzhen',
    localName: '深圳市龙岗区香港中文大学（深圳）附属知新学校',
    olympiad: false,
  },
  {
    name: 'Daoyuan School Affiliated to The Chinese University of Hong Kong, Shenzhen',
    localName: '深圳市龙岗区香港中文大学（深圳）附属道远学校',
    olympiad: false,
  },
];

const numberWords = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
export const oneaiSchoolCount = numberWords[oneaiSchools.length] ?? String(oneaiSchools.length);

export const oneaiOlympiadSchools = oneaiSchools.filter((school) => school.olympiad);
