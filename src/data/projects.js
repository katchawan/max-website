//photos you import here, separate by comma
import {
  CoxBiz,
  CoxCon,
  Dentek,
  Harley,
  Stray,
  Ubrelvy,
  Xfinity,
  insta
} from '../assets'

//videos imported here, separated by comma
import {
  CoxBizVid,
  CoxConVid,
  DentekVid,
  HarleyVid,
  StrayVid,
  UbrelvyVid,
  XfinityVid
} from '../assets'

//each project is separated by a bracket and comma
const projects = [
    {
      id: "1",
      password: "anj123",
      hasPassword: true,
      company: "Harley",
      poster: Harley,
      source: HarleyVid,
    },
    {
      id: "2",
      password: "",
      hasPassword: false,
      company: "Stray",
      poster: Stray,
      source: HarleyVid,
    },
    {
      id: "3",
      password: "",
      hasPassword: false,
      company: "Xfinity",
      poster: Xfinity,
      source: XfinityVid,
    },
    {
      id: "4",
      password: "",
      hasPassword: false,
      company: "Cox Biz",
      poster: CoxBiz,
      source: CoxBizVid,
    },
    {
      id: "5",
      password: "",
      hasPassword: false,
      company: "Ubrelvy",
      poster: Ubrelvy,
      source: UbrelvyVid,
    },
    {
      id: "6",
      password: "",
      hasPassword: false,
      company: "Dentek",
      poster: Dentek,
      source: DentekVid,
    }
];

export default projects