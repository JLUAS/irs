import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';
import { Router } from '@angular/router';

interface Link {
  title: string;
  url: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone:false
})
export class MainComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 6;
  isAuthenticated: boolean = true;

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isAuthenticated = this.authGoogleService.isAuthenticated();
      if (!this.isAuthenticated) {
        console.log("Authenticated in", this.isAuthenticated);
        this.router.navigate(['/']);
      }
    }, 2000); // Espera 2 segundos antes de revisar la autenticación.
  }

  // Método que devuelve los links de la página actual
  get paginatedLinks(): Link[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.links.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Calcula el número total de páginas
  totalPages(): number {
    return Math.ceil(this.links.length / this.itemsPerPage);
  }

  // Avanza a la siguiente página si es posible
  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  // Retrocede a la página anterior si es posible
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile());
    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }

  links: Link[] = [
    {
      "title": "Home - Misión Tiburón",
      "url": "https://www.misiontiburon.org/"
    },
    {
      "title": "Airwars",
      "url": "https://airwars.org/"
    },
    {
      "title": "Tricontinental: Institute for Social Research",
      "url": "https://thetricontinental.org/"
    },
    {
      "title": "British Ecological Society",
      "url": "https://besjournals.onlinelibrary.wiley.com"
    },
    {
      "title": "APA PsycInfo",
      "url": "https://www.apa.org/pubs/databases/psycinfo/index"
    },
    {
      "title": "AGRICOLA | National Agricultural Library",
      "url": "https://www.nal.usda.gov/agricola"
    },
    {
      "title": "Journal of Applied Physiology",
      "url": "https://journals.physiology.org/journal/jappl"
    },
    {
      "title": "Home | AIAA Aerospace Research Central",
      "url": "https://arc.aiaa.org/"
    },
    {
      "title": "PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      "title": "Environmental-Robots",
      "url": "https://environmental-robots.com/"
    },
    {
      "title": "2025 Conference info",
      "url": "https://www.evolutionmeetings.org/"
    },
    {
      "title": "Home - Society of Vertebrate Paleontology",
      "url": "https://vertpaleo.org/"
    },
    {
      "title": "Bat Conservation International / Ending Bat Extinctions Worldwide",
      "url": "https://www.batcon.org/"
    },
    {
      "title": "Enciclovida",
      "url": "https://enciclovida.mx/"
    },
    {
      "title": "Tree of Life Web Project",
      "url": "http://tolweb.org/tree/phylogeny.html"
    },
    {
      "title": "National Snow and Ice Data Center",
      "url": "https://nsidc.org/home"
    },
    {
      "title": "Homepage | HHMI BioInteractive",
      "url": "https://www.biointeractive.org/"
    },
    {
      "title": "New England Aquarium in Boston - Protecting Animals & the Ocean",
      "url": "https://www.neaq.org/?gclid=EAIaIQobChMIkLvigcTI3QIVrbztCh36vAbpEAAYASAAEgL9OfD_BwE"
    },
    {
      "title": "1000 Genomes | A Deep Catalog of Human Genetic Variation",
      "url": "https://www.internationalgenome.org/home"
    },
    {
      "title": "Encyclopedia of Life",
      "url": "https://eol.org/"
    },
    {
      "title": "Geological Society of America",
      "url": "https://www.geosociety.org/gsa"
    },
    {
      "title": "Society for the Study of Evolution",
      "url": "https://www.evolutionsociety.org/"
    },
    {
      "title": "The Society for Integrative and Comparative Biology | SICB",
      "url": "https://sicb.org/"
    },
    {
      "title": "North American Society for Bat Research - Home",
      "url": "https://www.nasbr.org/"
    },
    {
      "title": "Berkely Palenteology Online Resources",
      "url": "https://ucmp.berkeley.edu/online-exhibits/"
    },
    {
      "title": "Our events",
      "url": "https://institute-events.mit.edu/events/"
    },
    {
      "title": "Biological Sciences | Study at Bristol | University of Bristol",
      "url": "https://www.bristol.ac.uk/study/postgraduate/research/biological-sciences/"
    },
    {
      "title": "Mechanical Engineering | Study at Bristol | University of Bristol",
      "url": "https://www.bristol.ac.uk/study/postgraduate/research/mechanical-engineering/"
    },
    {
      "title": "Mexico International Students",
      "url": "https://www.bristol.ac.uk/international/countries/mexico.html#pgentryreqs"
    },
    {
      "title": "Aerospace Engineering | Study at Bristol | University of Bristol",
      "url": "https://www.bristol.ac.uk/study/postgraduate/research/aerospace-engineering/"
    },
    {
      "title": "Research projects",
      "url": "https://www.bristol.ac.uk/aerodynamics-research/research-projects/"
    },
    {
      "title": "Faculty of Science and Engineering | Faculty of Science and Engineering | University of Bristol",
      "url": "https://www.bristol.ac.uk/science-engineering/"
    },
    {
      "title": "PhD Programmes, Research Projects & Studentships in the UK & Europe",
      "url": "https://www.findaphd.com/"
    },
    {
      "title": "People - GALCIT - Graduate Aerospace Laboratories",
      "url": "https://www.galcit.caltech.edu/people"
    },
    {
      "title": "Computational and Data-Driven Fluid Dynamics",
      "url": "https://colonius.caltech.edu/"
    },
    {
      "title": "Center for Bioinspired Engineering",
      "url": "http://bioinspired.caltech.edu/index.html"
    },
    {
      "title": "Sheffield Robotics",
      "url": "https://www.sheffield.ac.uk/sheffieldrobotics"
    },
    {
      "title": "Our centres and partnerships - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/doctoral-training-centres/our-centres.aspx"
    },
    {
      "title": "Doctoral training programmes - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/doctoral-training-centres/index.aspx"
    },
    {
      "title": "Postgraduate study - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/pgstudy/how-to-apply/research.aspx"
    },
    {
      "title": "Faculty of Engineering",
      "url": "https://www.nottingham.ac.uk/engineering/"
    },
    {
      "title": "Bioengineering MSc 2025 entry - University of Nottingham",
      "url": "https://www.nottingham.ac.uk/pgstudy/course/taught/bioengineering-msc"
    },
    {
      "title": "Mechanical Engineering PhD 2025 - University of Nottingham",
      "url": "https://www.nottingham.ac.uk/pgstudy/course/research/mechanical-engineering-phd"
    },
    {
      "title": "Mechanical Engineering MSc 2025 entry - University of Nottingham",
      "url": "https://www.nottingham.ac.uk/pgstudy/course/taught/mechanical-engineering-msc"
    },
    {
      "title": "Research - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/life-sciences/research/index.aspx"
    },
    {
      "title": "University of Nottingham",
      "url": "https://www.nottingham.ac.uk/?_gl=1*tf2tmh*_gcl_au*NzI2MzU2MTM3LjE3MzI0MTA0OTc.*_ga*MTgwMDE3NTk0Ny4xNzMyNDEwNDk4*_ga_NTJWP5TDWB*MTczMjQxMDQ5Ny4xLjEuMTczMjQxMDUwOS40OC4wLjA."
    },
    {
      "title": "UCL – University College London",
      "url": "https://www.ucl.ac.uk/"
    },
    {
      "title": "Department of Biology",
      "url": "https://www.biology.lu.se/node/1"
    },
    {
      "title": "Integrative Biology",
      "url": "https://ib.berkeley.edu/"
    },
    {
      "title": "Postgraduate programmes | Study at Bristol | University of Bristol",
      "url": "https://www.bristol.ac.uk/study/postgraduate/search/?page=1"
    },
    {
      "title": "Fluid and Aerodynamics",
      "url": "https://www.bristol.ac.uk/aerodynamics-research/"
    },
    {
      "title": "Funding",
      "url": "https://www.zoo.cam.ac.uk/study/postgraduate/funding"
    },
    {
      "title": "Application FAQs",
      "url": "https://www.zoo.cam.ac.uk/application-faqs"
    },
    {
      "title": "Four-year PhD programme in Developmental Mechanisms",
      "url": "https://devmech.pdn.cam.ac.uk/phd/grouplist.shtml"
    },
    {
      "title": "Flight Group",
      "url": "https://flight.zoo.ox.ac.uk/"
    },
    {
      "title": "Oxford DTP in Environmental Research",
      "url": "https://www.environmental-research.ox.ac.uk/"
    },
    {
      "title": "Department of Biology",
      "url": "https://www.biology.ox.ac.uk/"
    },
    {
      "title": "Application Guide | University of Oxford",
      "url": "https://www.ox.ac.uk/admissions/graduate/applying-to-oxford/application-guide?wssl=1#content-tab--4"
    },
    {
      "title": "Bio-Inspired Quantum Technologies",
      "url": "https://www.oxfordmartin.ox.ac.uk/quantum"
    },
    {
      "title": "Events | Brown University",
      "url": "https://events.brown.edu/"
    },
    {
      "title": "Department of Ecology, Evolution and Organismal Biology | Brown University",
      "url": "https://eeob.brown.edu/"
    },
    {
      "title": "Frequently Asked Questions",
      "url": "https://engineering.brown.edu/graduate/admissions/frequently-asked-questions"
    },
    {
      "title": "Stanford PhD Admissions",
      "url": "https://me.stanford.edu/academics-admissions/graduate-programs/doctoral-program/phd-admissions"
    },
    {
      "title": "Themes - Mechanical, Aerospace, Civil Engineering and Management - The University of Manchester",
      "url": "https://www.mace.manchester.ac.uk/research/themes/"
    },
    {
      "title": "Research programmes - Mechanical, Aerospace, Civil Engineering and Management - The University of Manchester",
      "url": "https://www.mace.manchester.ac.uk/study/postgraduate-research/research-programmes/"
    },
    {
      "title": "Mechanical engineering Info",
      "url": "https://www.mace.manchester.ac.uk/study/undergraduate/courses/mechanical-engineering/"
    },
    {
      "title": "PhD Mechanical Engineering - full details (2025 entry) | The University of Manchester",
      "url": "https://www.manchester.ac.uk/study/postgraduate-research/programmes/list/03061/phd-mechanical-engineering/all-content/#course-profile"
    },
    {
      "title": "Postgraduate research - Mechanical, Aerospace, Civil Engineering and Management - The University of Manchester",
      "url": "https://www.mace.manchester.ac.uk/study/postgraduate-research/"
    },
    {
      "title": "Banff - Centre for Arts and Creativity",
      "url": "https://www.banffcentre.ca/"
    },
    {
      "title": "Engineering | Brown University",
      "url": "https://engineering.brown.edu/"
    },
    {
      "title": "Biomimetics Robotics Lab",
      "url": "https://biomimetics.mit.edu/"
    },
    {
      "title": "Experimental Soft Condensed Matter Group",
      "url": "https://weitzlab.seas.harvard.edu"
    },
    {
      "title": "Disease Biophysics Group",
      "url": "https://diseasebiophysics.seas.harvard.edu"
    },
    {
      "title": "Mahadevan Natural Philosophy",
      "url": "https://softmath.seas.harvard.edu"
    },
    {
      "title": "Aizenberg",
      "url": "https://aizenberglab.seas.harvard.edu/index.php?&wh=1920x955x1920x1080"
    },
    {
      "title": "Harvard Biodesign Lab",
      "url": "https://biodesign.seas.harvard.edu"
    },
    {
      "title": "Harvard Biorobotics Laboratory",
      "url": "https://biorobotics.harvard.edu/index.html"
    },
    {
      "title": "Lab Meeting Schedule",
      "url": "https://sites.bu.edu/robotics/lab-meetings-schedule/"
    },
    {
      "title": "Oxford University Press on JSTOR",
      "url": "https://www.jstor.org/publisher/oup"
    },
    {
      "title": "RWTH AACHEN UNIVERSITY Faculty of Mechanical Engineering - English",
      "url": "https://www.maschinenbau.rwth-aachen.de/cms/~gxo/Maschinenbau/lidx/1/"
    },
    {
      "title": "Home",
      "url": "https://www.caltech.edu/"
    },
    {
      "title": "Micro | Cambridge | Harvard Microrobotics Laboratory",
      "url": "https://www.micro.seas.harvard.edu/"
    },
    {
      "title": "Home Page | Harvard John A. Paulson School of Engineering and Applied Sciences",
      "url": "https://seas.harvard.edu/"
    },
    {
      "title": "Engineering | Brown University",
      "url": "https://engineering.brown.edu/"
    },
    {
      "title": "Watson Institute for International and Public Affairs",
      "url": "https://home.watson.brown.edu/"
    },
    {
      "title": "Calinbelta",
      "url": "https://calinbelta.com"
    },
    {
      "title": "McKeon Research Group",
      "url": "https://mckeon.stanford.edu/"
    },
    {
      "title": "Gharib Research Group",
      "url": "https://www.gharib.caltech.edu/"
    },
    {
      "title": "Home | LIDo DTP",
      "url": "https://www.lido-dtp.ac.uk/"
    },
    {
      "title": "Animal Flight Lab",
      "url": "https://aninmalflightlab-lund.blogspot.com/"
    },
    {
      "title": "Poly-PEDAL Lab",
      "url": "https://polypedal.berkeley.edu/"
    },
    {
      "title": "Contact",
      "url": "https://berkeleyflightlab.org/contact/"
    },
    {
      "title": "Bio-Inspired Flight Lab",
      "url": "https://www.bristol.ac.uk/aerodynamics-research/research-projects/bif/"
    },
    {
      "title": "Insect Biomechanics Workgroup",
      "url": "https://www.zoo.cam.ac.uk/research/groups/insect-biomechanics"
    },
    {
      "title": "Laboratory for Development and Evolution",
      "url": "https://www.zoo.cam.ac.uk/research/groups/lab-dev-evol"
    },
    {
      "title": "Wyss Institute | Wyss Institute at Harvard",
      "url": "https://wyss.harvard.edu/"
    },
    {
      "title": "Breuer Lab",
      "url": "https://sites.brown.edu/breuerlab/"
    },
    {
      "title": "Aeromechanics and Evolutionary Morphology | Department of Ecology and Evolutionary Biology | Brown University",
      "url": "https://www.brown.edu/Departments/EEB/EML/"
    },
    {
      "title": "Department of Organismic and Evolutionary Biology",
      "url": "https://oeb.harvard.edu/research"
    },
    {
      "title": "Concord Field Station",
      "url": "https://cfs.mcz.harvard.edu/"
    },
    {
      "title": "Biewener Lab",
      "url": "https://biewenerlab.oeb.harvard.edu/"
    },
    {
      "title": "Lauder Laboratory",
      "url": "https://sites.harvard.edu/glauder/"
    },
    {
      "title": "MIT Towing Tank | Home",
      "url": "https://web.mit.edu/towtank/www/index.html"
    },
    {
      "title": "Ehl Experimental Hidrodynamics Laboratory",
      "url": "http://ehl.mit.edu/"
    },
    {
      "title": "Environmental Dynamics ENDLab",
      "url": "https://web.mit.edu/endlab/index.html"
    },
    {
      "title": "PhD Mechanical Engineering (2025 entry) | The University of Manchester",
      "url": "https://www.manchester.ac.uk/study/postgraduate-research/programmes/list/03061/phd-mechanical-engineering/#course-profile"
    },
    {
      "title": "Laboratory of Intelligent Systems",
      "url": "https://www.epfl.ch/labs/lis/"
    },
    {
      "title": "CSHL DNA Learning Center",
      "url": "https://dnalc.cshl.edu/"
    },
    {
      "title": "Signalab | EXPERIMENTACIÓN, INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO",
      "url": "https://signalab.mx/"
    },
    {
      "title": "Device Research Lab",
      "url": "https://drl.mit.edu/"
    },
    {
      "title": "Active Adaptive Control Laboratory",
      "url": "http://aaclab.mit.edu/research.php"
    },
    {
      "title": "Biomimetics Robotics Lab",
      "url": "https://biomimetics.mit.edu/"
    },
    {
      "title": "HML Hatsopoulos Microfluids Laboratory",
      "url": "https://hml.mit.edu/"
    },
    {
      "title": "Zhao Lab",
      "url": "http://zhao.mit.edu/"
    },
    {
      "title": "Mechatronics Research Laboratory",
      "url": "https://mechatronics.mit.edu/"
    },
    {
      "title": "Projects - Aerospace Controls Laboratory",
      "url": "https://acl.mit.edu/projects/"
    },
    {
      "title": "Robot Locomotion Group",
      "url": "https://locomotion.csail.mit.edu/index.html"
    },
    {
      "title": "Research - Interactive Robotics Group",
      "url": "https://interactive.mit.edu/research/"
    },
    {
      "title": "The SGLab",
      "url": "https://www.lisglab.com"
    },
    {
      "title": "Soft Robotics Research",
      "url": "https://robert.katzschmann.de"
    },
    {
      "title": "Experimental Soft Condensed Matter Group",
      "url": "https://weitzlab.seas.harvard.edu"
    },
    {
      "title": "Disease Biophysics Group",
      "url": "https://diseasebiophysics.seas.harvard.edu"
    },
    {
      "title": "Mahadevan Natural Philosophy",
      "url": "https://softmath.seas.harvard.edu"
    },
    {
      "title": "Aizenberg",
      "url": "https://aizenberglab.seas.harvard.edu/index.php?&wh=1920x955x1920x1080"
    },
    {
      "title": "Soft Robotics Toolkit",
      "url": "https://softroboticstoolkit.com"
    },
    {
      "title": "Harvard Biodesign Lab",
      "url": "https://biodesign.seas.harvard.edu"
    },
    {
      "title": "Scott Kuindersma - Harvard University",
      "url": "https://scottk.seas.harvard.edu"
    },
    {
      "title": "Harvard Biorobotics Laboratory",
      "url": "https://biorobotics.harvard.edu/index.html"
    },
    {
      "title": "Center for Information & Systems Engineering",
      "url": "https://www.bu.edu/cise/"
    },
    {
      "title": "Aerospace illinois",
      "url": "https://aerospace.illinois.edu/"
    },
    {
      "title": "Biorobotics Laboratory (BioRob)",
      "url": "https://www.epfl.ch/labs/biorob/"
    },
    {
      "title": "Reconfigurable Robotics Lab",
      "url": "https://www.epfl.ch/labs/rrl/"
    },
    {
      "title": "Micro | Cambridge | Harvard Microrobotics Laboratory",
      "url": "https://www.micro.seas.harvard.edu/"
    },
    {
      "title": "Home - NCCR Robotics",
      "url": "https://nccr-robotics.ch/"
    },
    {
      "title": "Biological Questions - LentinkLab",
      "url": "https://lentinklab.com/"
    },
    {
      "title": "Thermal Imaging, Night Vision and Infrared Camera Systems | Teledyne FLIR",
      "url": "https://www.flir.com/"
    },
    {
      "title": "The DelFly Project",
      "url": "https://www.delfly.nl/home/"
    },
    {
      "title": "DABIRI LAB",
      "url": "https://dabirilab.com/"
    },
    {
      "title": "The Drunken Monkey",
      "url": "https://berkeleyflightlab.org/the-drunken-monkey/"
    },
    {
      "title": "Tim Colonius - Mechanical and Civil Engineering",
      "url": "https://www.mce.caltech.edu/people/colonius"
    },
    {
      "title": "Dr Kwing-So Choi Homepage",
      "url": "https://www.nottingham.ac.uk/~eazksc/index.htm"
    },
    {
      "title": "Professor Kwing-So Choi - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/news/expertiseguide/engineering/professor-kwing-so-choi.aspx"
    },
    {
      "title": "Professor Yuying Yan - The University of Nottingham",
      "url": "https://www.nottingham.ac.uk/news/expertiseguide/engineering/professor-yuying-yan-.aspx"
    },
    {
      "title": "Professor Richard Bomphrey - Our People - About - Royal Veterinary College, RVC",
      "url": "https://www.rvc.ac.uk/about/our-people/richard-bomphrey#tab-research"
    },
    {
      "title": "Robert J. Full",
      "url": "https://ib.berkeley.edu/people/faculty/fullr"
    },
    {
      "title": "Robert Dudley",
      "url": "https://ib.berkeley.edu/people/faculty/dudleyr"
    },
    {
      "title": "Andrew T Conn",
      "url": "https://research-information.bris.ac.uk/en/persons/andrew-t-conn"
    },
    {
      "title": "Professor Anthony Pipe - UWE Bristol",
      "url": "https://people.uwe.ac.uk/Person/AnthonyPipe"
    },
    {
      "title": "Mr Martin Pearson - UWE Bristol",
      "url": "https://people.uwe.ac.uk/Person/MartinPearson"
    },
    {
      "title": "Professor Nathan Lepora",
      "url": "https://www.bristol.ac.uk/people/person/Nathan-Lepora-83045353-295f-488f-8720-e19648954fba/"
    },
    {
      "title": "Professor Helmut Hauser",
      "url": "https://www.bristol.ac.uk/people/person/Helmut-Hauser-0cc06308-dff5-4d30-be7a-56672ada396b/"
    },
    {
      "title": "Dr Andrew Conn",
      "url": "https://www.bristol.ac.uk/people/person/Andrew-Conn-96fe4381-1129-4441-bcca-ffcec270baf1/"
    },
    {
      "title": "Prof Walter Federle",
      "url": "https://www.zoo.cam.ac.uk/directory/walter-federle"
    },
    {
      "title": "Swartz, Sharon",
      "url": "https://vivo.brown.edu/display/sswartz"
    },
    {
      "title": "Breuer, Kenny",
      "url": "https://vivo.brown.edu/display/kbreuer"
    },
    {
      "title": "Andrew A. Biewener",
      "url": "https://oeb.harvard.edu/people/andrew-biewener"
    },
    {
      "title": "George V. Lauder",
      "url": "https://oeb.harvard.edu/people/george-v-lauder"
    },
    {
      "title": "Robert J. Wood | Harvard John A. Paulson School of Engineering and Applied Sciences",
      "url": "https://seas.harvard.edu/person/robert-wood"
    },
    {
      "title": "MIT Towing Tank | People",
      "url": "https://web.mit.edu/towtank/www/people.html"
    },
    {
      "title": "Prof. Alexandra H. Techet",
      "url": "https://web.mit.edu/ahtechet/www/Home.html"
    },
    {
      "title": "Farshad Arvin",
      "url": "https://personalpages.manchester.ac.uk/staff/farshad.arvin/"
    },
    {
      "title": "William Crowther",
      "url": "https://research.manchester.ac.uk/en/persons/bill.crowther"
    },
    {
      "title": "Ben Parslew",
      "url": "https://research.manchester.ac.uk/en/persons/ben.parslew"
    },
    {
      "title": "Alistair Revell",
      "url": "https://research.manchester.ac.uk/en/persons/alistair.revell"
    },
    {
      "title": "About Ben Sparks",
      "url": "https://www.bensparks.co.uk/"
    },
    {
      "title": "Shuguang Li Mechanical Engineering",
      "url": "https://www.lisglab.com/shuguangli"
    },
    {
      "title": "MECHE PEOPLE: Michael Triantafyllou | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/MISTETRI@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Chryssostomos Chryssostomidis | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/CHRYS@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Steven Dubowsky | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/dubowsky@mit.edu"
    },
    {
      "title": "MECHE PEOPLE: Kamal Youcef-Toumi | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/YOUCEF@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Alberto Rodriguez Garcia | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/ALBERTOR@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Ian Hunter | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/IHUNTER@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Domitilla Del Vecchio | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/ddv@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Neville Hogan | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/neville@mit.edu"
    },
    {
      "title": "MECHE PEOPLE: Harry Asada | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/asada@mit.edu"
    },
    {
      "title": "MECHE PEOPLE: Sangbae Kim | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU"
    },
    {
      "title": "John Baillieul",
      "url": "https://people.bu.edu/johnb/"
    },
    {
      "title": "MECHE PEOPLE: Xuanhe Zhao | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/ZHAOX@MIT.EDU"
    },
    {
      "title": "MECHE PEOPLE: Pedro Reis | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/preis@mit.edu"
    },
    {
      "title": "Radhika Nagpal",
      "url": "https://www.radhikanagpal.org/#outreach"
    },
    {
      "title": "MECHE PEOPLE: Anette (Peko) Hosoi | MIT Department of Mechanical Engineering",
      "url": "https://meche.mit.edu/people/faculty/PEKO@MIT.EDU"
    },
    {
      "title": "Visualizing quaternions, an explorable video series",
      "url": "https://eater.net/quaternions"
    },
    {
      "title": "Peano-HASEL actuators that mimic natural muscle",
      "url": "https://www.youtube.com/watch?v=-TKjJBZEZe4"
    },
    {
      "title": "Nvim r",
      "url": "https://raw.githubusercontent.com/jalvesaq/Nvim-R/master/doc/Nvim-R.txt"
    },
    {
      "title": "I drill size decimal equivalent&tap drill chart",
      "url": "https://www.imperialsupplies.com/pdf/I_DrillSizeDecimalEquivalent&TapDrillChart.pdf"
    },
    {
      "title": "Tapdrillsizes",
      "url": "https://www.littlemachineshop.com/images/gallery/PDF/tapdrillsizes.pdf"
    },
    {
      "title": "No, really, pi is wrong: The Tau Manifesto",
      "url": "https://tauday.com/tau-manifesto"
    },
    {
      "title": "Jeb",
      "url": "https://journals.biologists.com/jeb"
    },
    {
      "title": "jayduino - Arduino stuff written by me",
      "url": "http://www.schwietering.com/jayduino/"
    },
    {
      "title": "The Strange Numbers That Birthed Modern Algebra | Quanta Magazine",
      "url": "https://www.quantamagazine.org/the-strange-numbers-that-birthed-modern-algebra-20180906/"
    },
    {
      "title": "Archivo Histórico: Memoria para la posteridad",
      "url": "https://www.uaeh.edu.mx/garceta/2019/enero/archivo-historico.html"
    },
    {
      "title": "Next in 3D-printing: the \"zoolophone,\" a new musical instrument made of animal shapes | MIT CSAIL",
      "url": "https://www.csail.mit.edu/news/next-3d-printing-zoolophone-new-musical-instrument-made-animal-shapes"
    },
    {
      "title": "Self-driving cars, meet rubber duckies | MIT CSAIL",
      "url": "https://www.csail.mit.edu/news/self-driving-cars-meet-rubber-duckies"
    },
    {
      "title": "Neural Adaptive Bitrate Streaming using Reinforcement Learning | MIT CSAIL",
      "url": "https://www.csail.mit.edu/research/neural-adaptive-bitrate-streaming-using-reinforcement-learning"
    },
    {
      "title": "RoboBees: Autonomous Flying Microrobots",
      "url": "https://wyss.harvard.edu/technology/robobees-autonomous-flying-microrobots/"
    },
    {
      "title": "PigeonBot Uses Real Feathers to Explore How Birds Fly",
      "url": "https://spectrum.ieee.org/pigeonbot-uses-real-feathers-to-explore-how-birds-fly"
    },
    {
      "title": "Festo's New Bio-Inspired Robots Include a Feathery Bionic Bird",
      "url": "https://spectrum.ieee.org/festo-bioinspired-robots-bionicswift"
    },
    {
      "title": "How a One-Man Team From California Won NASA's Space Robotics Challenge",
      "url": "https://spectrum.ieee.org/coordinated-robotics-winner-nasa-space-robotics-challenge"
    },
    {
      "title": "PhD Programmes, Research Projects & Studentships in the UK & Europe",
      "url": "https://www.findaphd.com/"
    },
    {
      "title": "D3 JavaScript library for bespoke data visualization",
      "url": "https://d3js.org/"
    },
    {
      "title": "airblade/vim-gitgutter: A Vim plugin which shows git diff markers in the sign column and stages/previews/undoes hunks and partial hunks.",
      "url": "https://github.com/airblade/vim-gitgutter"
    },
    {
      "title": "vim-syntastic/syntastic: Syntax checking hacks for vim",
      "url": "https://github.com/vim-syntastic/syntastic"
    },
    {
      "title": "chrisbra/csv.vim: A Filetype plugin for csv files",
      "url": "https://github.com/chrisbra/csv.vim"
    },
    {
      "title": "preservim/tagbar: Vim plugin that displays tags in a window, ordered by scope",
      "url": "https://github.com/preservim/tagbar"
    },
    {
      "title": "I drill size decimal equivalent&tap drill chart",
      "url": "https://www.imperialsupplies.com/pdf/I_DrillSizeDecimalEquivalent&TapDrillChart.pdf"
    },
    {
      "title": "The Engineering ToolBox",
      "url": "https://www.engineeringtoolbox.com/"
    },
    {
      "title": "Tapdrillsizes",
      "url": "https://www.littlemachineshop.com/images/gallery/PDF/tapdrillsizes.pdf"
    },
    {
      "title": "jayduino - Arduino stuff written by me",
      "url": "http://www.schwietering.com/jayduino/"
    },
    {
      "title": "Capture Your Vision with Crafty Studio",
      "url": "https://www.steadxp.com/"
    },
    {
      "title": "AutoHotkey",
      "url": "https://www.autohotkey.com/"
    },
    {
      "title": "National Center for Biotechnology Information",
      "url": "https://www.ncbi.nlm.nih.gov/"
    },
    {
      "title": "Specific Materials - Alloy Guide & Finder - MetalTek",
      "url": "https://www.metaltek.com/alloys/"
    },
    {
      "title": "3D printing - Recent models | 3D CAD Model Collection | GrabCAD Community Library",
      "url": "https://grabcad.com/library/category/3d-printing"
    },
    {
      "title": "MakeItFrom.com",
      "url": "https://www.makeitfrom.com/"
    },
    {
      "title": "Materials Information by Material",
      "url": "https://www.azom.com/materials.aspx"
    },
    {
      "title": "PCB Artist Software",
      "url": "https://www.advancedpcb.com/en-us/tools/pcb-artist-software/"
    },
    {
      "title": "Bolt Torque Calculator",
      "url": "https://www.futek.com/bolttorque/american"
    },
    {
      "title": "Creative Software For Professionals | We Are Affinity",
      "url": "https://affinity.serif.com/en-us/"
    },
    {
      "title": "The Anarchist Library",
      "url": "https://theanarchistlibrary.org/special/index"
    },
    {
      "title": "Voro++ - A 3D Voronoi cell software library",
      "url": "https://math.lbl.gov/voro++/"
    },
    {
      "title": "mintty",
      "url": "https://mintty.github.io/mintty.1.html#DPI%20change"
    },
    {
      "title": "4bit. Terminal Color Scheme Designer",
      "url": "https://ciembor.github.io/4bit/"
    },
    {
      "title": "Best Colleges and Programs for Mathematics Students in the United States",
      "url": "https://writemyessayonline.com/blog/best-colleges-and-programs-for-mathematics-students-in-the-united-states/"
    },
    {
      "title": "Radio Garden",
      "url": "https://radio.garden/settings/contact"
    },
    {
      "title": "Feedly: Track the topics and trends that matter to you",
      "url": "https://feedly.com/homepage"
    },
    {
      "title": "Onshape | Product Development Platform",
      "url": "https://www.onshape.com/en/"
    },
    {
      "title": "Web of Science Master Journal List - WoS MJL by Clarivate",
      "url": "https://mjl.clarivate.com/home"
    },
    {
      "title": "Geogebra Search",
      "url": "https://www.geogebra.org/search"
    },
    {
      "title": "Pictorus is modeling, simulation and code generation, designed from the ground up for modern engineers.",
      "url": "https://www.pictor.us/"
    },
    {
      "title": "iTOL: Interactive Tree Of Life",
      "url": "https://itol.embl.de/"
    },
    {
      "title": "These 81 robotics companies are hiring | TechCrunch",
      "url": "https://techcrunch.com/2024/05/20/these-81-robotics-companies-are-hiring/"
    },
    {
      "title": "PLOS Biology",
      "url": "https://journals.plos.org/plosbiology/s/submission-guidelines"
    },
    {
      "title": "Electronic Frontier Foundation",
      "url": "https://www.eff.org/"
    },
    {
      "title": "Wait But Why",
      "url": "https://waitbutwhy.com/"
    },
    {
      "title": "ScienceAlert : The Best in Science News And Amazing Breakthroughs",
      "url": "https://www.sciencealert.com/"
    },
    {
      "title": "Tlachinollan | Centro de Derechos Humanos de la Montaña",
      "url": "https://www.tlachinollan.org/"
    },
    {
      "title": "Huitzil Revista Mexicana de Ornitologí­a",
      "url": "https://www.mexorn.org/index.php/huitzil"
    },
    {
      "title": "CEPAL - México",
      "url": "https://www.cepal.org/es/acerca/sedes-subregionales-oficinas/cepal-mexico"
    },
    {
      "title": "University Network for Human Rights",
      "url": "https://www.humanrightsnetwork.org/home"
    },
    {
      "title": "Inicio - DataCrítica",
      "url": "https://datacritica.org/"
    },
    {
      "title": "ARTICLE 19 - Defending freedom of expression and information.",
      "url": "https://www.article19.org/"
    },
    {
      "title": "Beyond the Wall - WOLA",
      "url": "https://www.wola.org/beyondthewall/"
    },
    {
      "title": "Information for authors: Current Biology",
      "url": "https://www.cell.com/current-biology/authors#about"
    },
    {
      "title": "Union of Concerned Scientists",
      "url": "https://www.ucsusa.org/"
    },
    {
      "title": "Papers | Costs of War",
      "url": "https://watson.brown.edu/costsofwar/papers"
    },
    {
      "title": "ARTESANOS | todofreshtx",
      "url": "https://www.todofreshtx.com/artesanos"
    },
    {
      "title": "Quinto Elemento",
      "url": "https://quintoelab.org/"
    },
    {
      "title": "Revitalizing Endangered Languages - Nahuatl",
      "url": "http://www.revitalization.al.uw.edu.pl/eng/Nahuatl"
    },
    {
      "title": "bioRxiv",
      "url": "https://www.biorxiv.org"
    },
    {
      "title": "British Ecological Society",
      "url": "https://besjournals.onlinelibrary.wiley.com"
    },
    {
      "title": "Annual Review of Ecology, Evolution, and Systematics",
      "url": "https://www.annualreviews.org/content/journals/ecolsys"
    },
    {
      "title": "Evolution",
      "url": "https://onlinelibrary.wiley.com/journal/15585646"
    },
    {
      "title": "Science | AAAS",
      "url": "https://www.science.org"
    },
    {
      "title": "Nature",
      "url": "https://www.nature.com"
    },
    {
      "title": "Home | Advanced Research",
      "url": "https://www.arjournals.org/?AspxAutoDetectCookieSupport=1"
    },
    {
      "title": "APA PsycInfo",
      "url": "https://www.apa.org/pubs/databases/psycinfo/index"
    },
    {
      "title": "AGRICOLA | National Agricultural Library",
      "url": "https://www.nal.usda.gov/agricola"
    },
    {
      "title": "Web of Science Master Journal List - WoS MJL by Clarivate",
      "url": "https://mjl.clarivate.com/home"
    },
    {
      "title": "Elsevier Journal Catalog: Browse Peer-Reviewed Journals List",
      "url": "https://www.elsevier.com/products/journals?query=&page=1&sortBy=relevance"
    },
    {
      "title": "Oxford University Press on JSTOR",
      "url": "https://www.jstor.org/publisher/oup"
    },
    {
      "title": "Journal of Applied Physiology",
      "url": "https://journals.physiology.org/journal/jappl"
    },
    {
      "title": "Blogs - PLOS",
      "url": "https://plos.org/blogs/"
    },
    {
      "title": "ScienceDirect.com | Science, health and medical journals, full text articles and books.",
      "url": "https://www.sciencedirect.com/"
    },
    {
      "title": "Delft University of Technology",
      "url": "https://www.tudelft.nl/en/"
    },
    {
      "title": "Welcome to the Royal Society | Royal Society",
      "url": "https://royalsociety.org/"
    },
    {
      "title": "Nature Communications",
      "url": "https://www.nature.com/ncomms/"
    },
    {
      "title": "Robohub - Connecting the robotics community to the world",
      "url": "https://robohub.org/"
    },
    {
      "title": "Home",
      "url": "https://www.machinedesign.com/"
    },
    {
      "title": "WIRED - The Latest in Technology, Science, Culture and Business",
      "url": "https://www.wired.com/"
    },
    {
      "title": "Roboticmagazine | Robot News",
      "url": "https://www.roboticmagazine.com/"
    },
    {
      "title": "Science | AAAS",
      "url": "https://www.science.org/"
    },
    {
      "title": "Servo Magazine - Covering the world of personal robotics",
      "url": "https://www.servomagazine.com/"
    },
    {
      "title": "CIO.com - Tech News, Analysis, Blogs, Video",
      "url": "https://www.cio.com/"
    },
    {
      "title": "BioXconomy",
      "url": "https://www.bioxconomy.com/"
    },
    {
      "title": "Discover Magazine",
      "url": "https://www.discovermagazine.com/"
    },
    {
      "title": "IEEE Spectrum",
      "url": "https://spectrum.ieee.org/"
    },
    {
      "title": "Hackaday",
      "url": "https://hackaday.com/"
    },
    {
      "title": "Business - The Boston Globe",
      "url": "http://betaboston.com/"
    },
    {
      "title": "reddit.com/r/robotics",
      "url": "http://reddit.com/r/robotics"
    },
    {
      "title": "TechCrunch | Startup and Technology News",
      "url": "https://techcrunch.com/"
    },
    {
      "title": "The Robot Report",
      "url": "https://www.therobotreport.com/"
    },
    {
      "title": "Blog - Learn Robotics",
      "url": "https://www.learnrobotics.org/blog/"
    },
    {
      "title": "Tech News",
      "url": "https://gizmodo.com/tech"
    },
    {
      "title": "RightHand Robotics",
      "url": "https://righthandrobotics.com/products"
    },
    {
      "title": "Online Metals",
      "url": "https://www.onlinemetals.com/en/product-guide"
    },
    {
      "title": "AgEagle Aerial Systems Inc. | Drones, Sensors and Software",
      "url": "https://ageagle.com/"
    },
    {
      "title": "MicroStrain by HBK",
      "url": "https://www.microstrain.com/"
    },
    {
      "title": "Protech Composites | Carbon Fiber Manufacturer & Supplier",
      "url": "https://protechcomposites.com/"
    },
    {
      "title": "McKune Design",
      "url": "https://mckunedesign.com/"
    },
    {
      "title": "oneTesla DIY Tesla Coil Kits Home Page",
      "url": "https://onetesla.com/"
    },
    {
      "title": "TheCubicle - High Quality Puzzles, Premium Speed Cubes, Free Shipping",
      "url": "https://www.thecubicle.com/en-mx"
    },
    {
      "title": "Aluminum Distributor - ASM Aerospace Specification Metals",
      "url": "https://www.aerospacemetals.com/aluminum-distributor/"
    },
    {
      "title": "Carbide Depot Carbide Inserts Boring Bars Toolholders Milling Cutters End Mills Drills Taps",
      "url": "https://www.carbidedepot.com/"
    },
    {
      "title": "ODROID",
      "url": "https://www.hardkernel.com"
    },
    {
      "title": "OSH Park",
      "url": "https://oshpark.com"
    },
    {
      "title": "Trezor Hardware Wallet (Official) | Bitcoin & Crypto Security",
      "url": "https://trezor.io"
    },
    {
      "title": "Yubico Home",
      "url": "https://www.yubico.com"
    },
    {
      "title": "Rechargeable lithium polymer battery catalog from PowerStream, lithium polymer batteries and cells in stock with specifications",
      "url": "https://www.powerstream.com/li-pol.htm"
    },
    {
      "title": "Motion Capture Systems",
      "url": "https://optitrack.com"
    },
    {
      "title": "Gan ac dc power adapters",
      "url": "https://www.cui.com/gan-ac-dc-power-adapters"
    },
    {
      "title": "edgertronic High Speed Video Cameras",
      "url": "https://edgertronic.com"
    },
    {
      "title": "Newegg – Shopping Upgraded",
      "url": "https://www.newegg.com"
    },
    {
      "title": "Cellular Tracking Technologies",
      "url": "https://celltracktech.com"
    },
    {
      "title": "Products | Lotek",
      "url": "https://www.lotek.com/products/"
    },
    {
      "title": "Wildlife Computers Inc. | Home",
      "url": "https://wildlifecomputers.com"
    },
    {
      "title": "Bat Detectors and Acoustic Wildlife Recorders - Titley Scientific",
      "url": "https://www.titley-scientific.com"
    },
    {
      "title": "Inertial Sense | Home",
      "url": "https://inertialsense.com"
    },
    {
      "title": "TinyFPGA",
      "url": "https://tinyfpga.com"
    },
    {
      "title": "Digital Video Recording Software for High Speed - NorPix",
      "url": "https://www.norpix.com"
    },
    {
      "title": "RLS: Rotary and linear motion sensors",
      "url": "https://www.rls.si/eng/"
    },
    {
      "title": "Harmonic Drive® High Precision Gear | Harmonic Drive",
      "url": "https://www.harmonicdrive.net"
    },
    {
      "title": "Portescap",
      "url": "https://www.portescap.com"
    },
    {
      "title": "We direct drive your motion technology | Tecnotion",
      "url": "https://www.tecnotion.com"
    },
    {
      "title": "Vishay Precision Group Load Cells",
      "url": "https://www.vishay-loadcells-intertechnology.com/index.htm"
    },
    {
      "title": "Sensing Innovation",
      "url": "https://www.omega.com/en-us/"
    },
    {
      "title": "Homepage US",
      "url": "https://www.ifm.com/us/en"
    },
    {
      "title": "ROBOTIS STORE | Robot is...",
      "url": "https://www.robotis.us"
    },
    {
      "title": "Wildlife Audio Recording Equipment",
      "url": "https://www.wildlifeacoustics.com"
    },
    {
      "title": "Tubes-Store.com - Vacuum tubes, capacitors, nixie tubes, indicators, VFD display, LED, sockets. Wholesale & retail trade. Worldwide shipping.",
      "url": "https://tubes-store.com/"
    },
    {
      "title": "LowPowerLab Store",
      "url": "https://lowpowerlab.com/shop/"
    },
    {
      "title": "Home",
      "url": "https://www.vicorpower.com/"
    },
    {
      "title": "CoilCell",
      "url": "https://microbots.io/products/coilcell?variant=48125814210893"
    },
    {
      "title": "D3 JavaScript library for bespoke data visualization",
      "url": "https://d3js.org/"
    },
    {
      "title": "Visualizing quaternions, an explorable video series",
      "url": "https://eater.net/quaternions"
    },
    {
      "title": "The Engineering ToolBox",
      "url": "https://www.engineeringtoolbox.com/"
    },
    {
      "title": "Explain Git with D3",
      "url": "https://onlywei.github.io/explain-git-with-d3/"
    },
    {
      "title": "Learn Git Branching",
      "url": "https://learngitbranching.js.org/"
    },
    {
      "title": "explainshell.com - match command-line arguments to their help text",
      "url": "https://explainshell.com/#"
    },
    {
      "title": "NDP Software :: Git Cheatsheet",
      "url": "https://ndpsoftware.com/git-cheatsheet.html#google_vignettex"
    },
    {
      "title": "507 Mechanical Movements",
      "url": "https://507movements.com/"
    },
    {
      "title": "Modern Methods for Quantifying Behavior — Cajal-DLC-Course",
      "url": "https://alexemg.github.io/DLC-Cajal-Course/README.html"
    },
    {
      "title": "HyperPhysics",
      "url": "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html"
    },
    {
      "title": "Learning Resources",
      "url": "https://www.machinedesign.com/learning-resources"
    },
    {
      "title": "Welcome to Linux From Scratch!",
      "url": "https://www.linuxfromscratch.org/"
    },
    {
      "title": "Modelling, Dynamics and Control - Section 6.8 Matlab apps for interactive learning",
      "url": "https://sites.google.com/sheffield.ac.uk/controleducation/matlabresources/section-6-8-matlab-apps-for-interactive-learning"
    },
    {
      "title": "Modelling, Dynamics and Control - First course in control",
      "url": "https://sites.google.com/sheffield.ac.uk/controleducation/first-course-in-control?authuser=0"
    },
    {
      "title": "Course Diagram - Multidisciplinary Mechatronics Innovation",
      "url": "https://multimechatronics.com/course-diagram/"
    },
    {
      "title": "BioMechatronics Laboratory - Control Systems",
      "url": "https://biomechatronics.ca/teaching/cs/"
    },
    {
      "title": "MathWorks-Teaching-Resources/Virtual-Controls-Laboratory: Virtual labs and mechanisms for studying controls.",
      "url": "https://github.com/MathWorks-Teaching-Resources/Virtual-Controls-Laboratory"
    },
    {
      "title": "Control Tutorials for MATLAB and Simulink - Index: Tutorials",
      "url": "https://ctms.engin.umich.edu/CTMS/index.php?aux=Index_Tutorials"
    },
    {
      "title": "Metal Suppliers Online Business Procurement Center",
      "url": "https://www.metalsuppliersonline.com/default.asp"
    },
    {
      "title": "Celesco Transducer Products, Inc.",
      "url": "https://www.celesco-transducers.com/"
    },
    {
      "title": "Electric Motorsport, Inc.",
      "url": "https://www.electricmotorsport.com/"
    },
    {
      "title": "Axial flux e-motors | lightweight | powerful - EMRAX",
      "url": "https://emrax.com/"
    },
    {
      "title": "Motors & Servomotors",
      "url": "https://www.moog.com/products/motors-servomotors.html"
    },
    {
      "title": "Servo Motor Manufacturer | Worcester",
      "url": "https://www.magmotor.com/"
    },
    {
      "title": "Motors and Motor Controllers",
      "url": "https://www.ampflow.com/"
    },
    {
      "title": "The smartest mast-technology for mobile applications",
      "url": "https://zippermast.com/"
    },
    {
      "title": "Spiralift Technology for platform elevator, stage, orchestra and piano",
      "url": "https://www.galasystems.com/en/spiralift/"
    },
    {
      "title": "Becker Pumps",
      "url": "https://beckerpumps.com/"
    },
    {
      "title": "Aluminum Castings & Rapid Prototypes",
      "url": "https://www.harmonycastings.com/"
    },
    {
      "title": "Coltri Compressors",
      "url": "https://coltri.com/en/"
    },
    {
      "title": "Industrial Location Tracking Solutions",
      "url": "https://www.pozyx.io/"
    },
    {
      "title": "Component Manufacturing, Machinery, Electronics",
      "url": "https://nmbtc.com/"
    },
    {
      "title": "Piezoelectric Ceramic Supplier.",
      "url": "https://www.steminc.com/PZT/en/"
    },
    {
      "title": "The Epoxy Experts",
      "url": "https://theepoxyexperts.com/"
    },
    {
      "title": "Brushless DC & AC servo motors, drives and controls",
      "url": "https://teknic.com/"
    },
    {
      "title": "Microspheres, Nanospheres, Precision Spherical Particles - Cospheric Ships Globally- US -based Manufacturer",
      "url": "http://cospheric"
    },
    {
      "title": "BMI Surplus",
      "url": "http://bmisurplus"
    },
    {
      "title": "Optics Manufacturer & Supplier | Imaging Lens & Laser Optics Manufacturer",
      "url": "https://www.edmundoptics.com/"
    },
    {
      "title": "Graftek Imaging Inc.",
      "url": "https://graftek.com/"
    },
    {
      "title": "Industrial cameras",
      "url": "https://en.ids-imaging.com/"
    },
    {
      "title": "Expert for Computer & Machine Vision",
      "url": "https://www.baslerweb.com/en/"
    },
    {
      "title": "Intralogistics, Warehouse Automation & Material Handling",
      "url": "https://www.swisslog.com/en-us"
    },
    {
      "title": "Quality Electronic Components & Services",
      "url": "https://www.avnet.com/wps/portal/us/"
    },
    {
      "title": "TB SPEAKER CO., LTD.-首頁",
      "url": "https://www.tb-speaker.com/"
    },
    {
      "title": "RS – Industrial Solutions & Electronic Components",
      "url": "https://us.rs-online.com/?msockid=0460d7ed6deb64b90707c3106c2c6558"
    },
    {
      "title": "Datasheets, Electronic Parts, Components",
      "url": "https://octopart.com/"
    },
    {
      "title": "Eastern Industrial Automation",
      "url": "https://www.easternia.com/"
    },
    {
      "title": "LED Lighting For Everything",
      "url": "https://www.superbrightleds.com/"
    },
    {
      "title": "ROS-Industrial",
      "url": "https://rosindustrial.org/"
    },
    {
      "title": "Everything Mold Maing & Casting",
      "url": "https://www.reynoldsam.com/"
    },
    {
      "title": "3D Time-of-Flight depth sensing solutions",
      "url": "https://pmdtec.com/en/"
    },
    {
      "title": "Development Boards and Electronic Kits",
      "url": "https://www.gabotronics.com/"
    },
    {
      "title": "Engraving, Sublimation, Heat Transfer & UV-LED",
      "url": "https://www.jpplus.com/"
    },
    {
      "title": "Mold Making & Casting Materials | Rubbers, Plastics, Foams & More!",
      "url": "https://www.smooth-on.com/"
    },
    {
      "title": "Starrett",
      "url": "https://www.starrett.com/"
    },
    {
      "title": "Precision Metrology Solutions",
      "url": "https://www.mitutoyo.com/"
    },
    {
      "title": "Sensor Intelligence",
      "url": "https://www.sick.com/us/en/"
    },
    {
      "title": "BRUSA",
      "url": "https://www.brusa.biz/home/"
    },
    {
      "title": "High-performance Power Supply Manufacturer",
      "url": "https://www.matsusada.com/"
    },
    {
      "title": "DongYang",
      "url": "http://www.dys.hk/"
    },
    {
      "title": "Ethernet Cables Wi-Fi Antennas Amplifiers Adapters Coaxial Connectors Fiber Optic loT NEMA Enclosures Suerge Protectors USB RF Splitters Patch Panels and Racks for Sale",
      "url": "https://www.l-com.com/"
    },
    {
      "title": "Desktop CNC, 3D Printing & DIY Tools | Power to the Makers",
      "url": "https://www.sainsmart.com/"
    },
    {
      "title": "Carbon Fiber Manufacturer & Supplier",
      "url": "https://protechcomposites.com/"
    },
    {
      "title": "FPV Drones for Sale, Quadcopters, Racing Drones, Motors and FPV Goggles",
      "url": "https://www.getfpv.com/"
    },
    {
      "title": "Lowest Price for Arduino/RC Hobby Parts, Digital Servos, Brushless Motors, ESC, LiPo Batteries/Chargers for RC Helicopters, RC Planes, RC Cars, Robots, RC Toys, 3D Printers",
      "url": "https://www.hobbypartz.com/"
    },
    {
      "title": "Servos, goBILDA, Gears, Motors and More!",
      "url": "https://www.servocity.com/"
    },
    {
      "title": "All3DP.com",
      "url": "https://all3dp.com/"
    },
    {
      "title": "On-demand manufacturing for custom parts",
      "url": "https://www.hubs.com/"
    },
    {
      "title": "Manufacturing on Demand",
      "url": "https://www.xometry.com/"
    },
    {
      "title": "3D Printing Service Online",
      "url": "https://www.shapeways.com/"
    },
    {
      "title": "About Us | 3D Printing Service",
      "url": "https://i.materialise.com/en/about"
    },
    {
      "title": "Push Fit Products",
      "url": "https://www.johnguest.com/gb/en/products"
    },
    {
      "title": "Planet Earth's Source for Aerogel™",
      "url": "http://www.buyaerogel.com/"
    },
    {
      "title": "Product Sourcing and Supplier Discovery Platform - Find North American Manufacturers, Suppliers and Industrial Companies",
      "url": "https://www.thomasnet.com/"
    },
    {
      "title": "Hydraulic Cylinders, Valves, Pumps and Components from Bailey. Over 40 Years of Experience.",
      "url": "https://www.baileyhydraulics.com/"
    },
    {
      "title": "Hydraulic Power Units",
      "url": "https://northpointeindustries.com/"
    },
    {
      "title": "Hydraulic Pressure Intensifiers",
      "url": "https://www.minibooster.com/"
    },
    {
      "title": "Plastic Fabrication Company | Emco Industrial Plastics",
      "url": "https://www.emcoplastics.com/"
    },
    {
      "title": "Industrial Tool Suply",
      "url": "https://itslowell.com/"
    },
    {
      "title": "Engineered Carbon Fiber Composite Sheets, Tubes and Structural Components | Made in USA",
      "url": "https://dragonplate.com/"
    },
    {
      "title": "The World's Most Practical Tactile Sensors.",
      "url": "https://www.takktile.com/"
    },
    {
      "title": "ebm-papst – energy-saving fans and motors from the world market leader – engineering a better life",
      "url": "https://www.ebmpapst.com/de/en/home.html"
    },
    {
      "title": "Industrial Automation: Robotic End Effectors and Automation Tooling",
      "url": "https://www.ati-ia.com/"
    },
    {
      "title": "Products & Technologies",
      "url": "https://tech.alpsalpine.com/e/"
    },
    {
      "title": "Color Tie Wraps from Tiewraps.com are Top Quality USA Made Solar Ties",
      "url": "https://tiewraps.com/"
    },
    {
      "title": "High Power LED Modules",
      "url": "https://luxeonstar.com/"
    },
    {
      "title": "Turnkey Aluminum and Zinc Aluminum Casting",
      "url": "https://www.genfoundry.com/"
    },
    {
      "title": "Industrial Casters & Wheels",
      "url": "https://www.hamiltoncaster.com/"
    },
    {
      "title": "Online Industrial Metal Supply",
      "url": "https://www.speedymetals.com/default.aspx"
    },
    {
      "title": "Product guide",
      "url": "https://www.onlinemetals.com/en/product-guide"
    },
    {
      "title": "Apex Fasteners",
      "url": "https://www.apexfasteners.com/fasteners/"
    },
    {
      "title": "Nobody makes custom gears faster!!!",
      "url": "https://www.rushgears.com/"
    },
    {
      "title": "QTC Distributor of Stock Metric Gears Spur Worm Bevel Steel Plastic",
      "url": "https://qtcgears.com/"
    },
    {
      "title": "Metric Sized Metals and Steels | Metric Metal",
      "url": "https://www.metricmetal.com/"
    },
    {
      "title": "THK Official Web Site | [ U.S.A. and Canada ]",
      "url": "https://www.thk.com/?q=us/node/5170"
    },
    {
      "title": "Baldor",
      "url": "https://www.baldor.com/"
    },
    {
      "title": "Ball & Roller Bearings Co: Boston, MA",
      "url": "https://www.emersonbearing.com/"
    },
    {
      "title": "Polygon Composites",
      "url": "https://polygoncomposites.com/"
    },
    {
      "title": "Ball Bearings - Precision Miniature Bearings - Industrial Bearings",
      "url": "https://www.astbearings.com/"
    },
    {
      "title": "Immersive Event Lighting Solutions for Fan-Favorite Experiences",
      "url": "https://pixmob.com/"
    },
    {
      "title": "Industry-Leading Strain Gage Manufacturers",
      "url": "https://www.microninstruments.com/"
    },
    {
      "title": "Micro-Epsilon",
      "url": "http://www.micro-epsilon.com/"
    },
    {
      "title": "Custom Metal Fabrication",
      "url": "https://www.ramsaywelding.com/"
    },
    {
      "title": "Robotics and Electronics",
      "url": "https://www.pololu.com/"
    },
    {
      "title": "Balluff",
      "url": "https://www.balluff.com/en-mx"
    },
    {
      "title": "Motion Control Solutions | Industrial Servomotors Servo Drives AC DC Motors",
      "url": "https://www.kollmorgen.com/en-us"
    },
    {
      "title": "Electronic Test & Measurement Instruments and Solutions including UltraVision II Oscilloscopes and UltraReal Real-Time Spectrum Analyzers",
      "url": "https://www.rigolna.com/"
    },
    {
      "title": "Chemical Analysis, Life Sciences, and Diagnostics",
      "url": "https://www.agilent.com/"
    },
    {
      "title": "Consolidated Coating Company",
      "url": "https://www.consolidatedcoating.com/"
    },
    {
      "title": "Solid State Relays",
      "url": "https://www.sensata.com/products/relays/solid-state-relays"
    },
    {
      "title": "Potentiometers | Circuit Protection | Diodes | Chip Resistors",
      "url": "https://www.bourns.com/"
    },
    {
      "title": "Passives & Discrete Semiconductors",
      "url": "https://www.vishay.com/"
    },
    {
      "title": "Mold Supply",
      "url": "https://www.brickintheyard.com/"
    },
    {
      "title": "Castle Creations - Shop",
      "url": "https://www.castlecreations.com/shop"
    },
    {
      "title": "High Precision Gear",
      "url": "https://www.harmonicdrive.net/"
    },
    {
      "title": "Timing Belt Manufacturer | Pulley Manufacturer",
      "url": "https://www.brecoflex.com/"
    },
    {
      "title": "The entire world of drive technology",
      "url": "https://www.maxongroup.com/en-us"
    },
    {
      "title": "Gear Motors",
      "url": "https://www.bisonametek.com/products/bison-gear-motors"
    },
    {
      "title": "IKO International",
      "url": "https://ikont.com/"
    },
    {
      "title": "Engineered Bearings & Power Transmission Products",
      "url": "https://www.timken.com/"
    },
    {
      "title": "ITI Balls",
      "url": "https://www.skf.com/us/products/other-products/iti-ball"
    },
    {
      "title": "Cooper Bearings",
      "url": "https://www.cooperbearings.com/"
    },
    {
      "title": "Thin section bearings, slewing ring bearings, bearing remanufacturing",
      "url": "https://www.kaydonbearings.com/"
    },
    {
      "title": "Shock Absorbers - Gas Springs - Vibration Technology ACE Controls International Inc. ACE Controls International Inc. | B2B Shop | ACE Stoßdämpfer GmbH",
      "url": "https://www.ace-ace.com/"
    },
    {
      "title": "Hydraulic Valves and Electronics",
      "url": "https://www.wandfluh-us.com/"
    },
    {
      "title": "Premium Quick Connectors & Couplings",
      "url": "https://www.fastestinc.com/"
    },
    {
      "title": "Beswick Engineering",
      "url": "https://www.beswick.com/"
    },
    {
      "title": "Zippertubing Co.",
      "url": "https://www.zippertubing.com/?AspxAutoDetectCookieSupport=1"
    },
    {
      "title": "Braided Sleeving Products",
      "url": "https://www.techflex.com/"
    },
    {
      "title": "Smalley",
      "url": "https://www.smalley.com/"
    },
    {
      "title": "PennEngineering",
      "url": "https://www.pemnet.com/"
    },
    {
      "title": "Latches and Access Hardware Solutions",
      "url": "https://southco.com/en_us_int/"
    },
    {
      "title": "Leading manufacturer & supplier of essential parts",
      "url": "https://www.essentracomponents.com/en-gb"
    },
    {
      "title": "Medcaster",
      "url": "https://medcaster.com/"
    },
    {
      "title": "Your castor and wheel manufacturer for all applications",
      "url": "https://www.blickle.us/en-us"
    },
    {
      "title": "Power Transmission, Motion Control, & Chains",
      "url": "https://www.ustsubaki.com/"
    },
    {
      "title": "Speed Reducer, Gear Drive, Variable Speed Drives",
      "url": "https://www.bostongear.com/"
    },
    {
      "title": "BLDC and Stepper Motor Manufacturer",
      "url": "https://www.linengineering.com/"
    },
    {
      "title": "Global Leader in Electromagnetic Clutches and Brakes",
      "url": "https://www.warnerelectric.com/"
    },
    {
      "title": "Danahermotion",
      "url": "https://www.danahermotion.se/"
    },
    {
      "title": "Precision Mechanical Gear & Small Components Manufacturer",
      "url": "https://www.pic-design.com/"
    },
    {
      "title": "Nameplates for Industry",
      "url": "https://nameplatesforindustry.com/"
    },
    {
      "title": "Connection Technologies",
      "url": "https://usa.souriau.com/en-en?id=intro"
    },
    {
      "title": "Mechatronic and handling solutions",
      "url": "https://www.amer.it/en"
    },
    {
      "title": "Nordson MEDICAL",
      "url": "https://www.nordsonmedical.com/"
    },
    {
      "title": "Nanotec",
      "url": "https://www.nanotec.com/us/en/products/"
    },
    {
      "title": "Grabit - The next era in automation.",
      "url": "https://grabitinc.com/company/"
    },
    {
      "title": "Hose Assembly Needs",
      "url": "https://www.customcrimp.com/Home.aspx"
    },
    {
      "title": "ValinOnline.com: Process Control, Filtration, Motion Control & Automation Products",
      "url": "https://valinonline.com/"
    },
    {
      "title": "Sunforge LLC Proud Creators of Genasun and Blue Sky Energy products",
      "url": "https://sunforgellc.com/"
    },
    {
      "title": "Dynex High Pressure Hydraulics",
      "url": "https://www.dynexhydraulics.com/"
    },
    {
      "title": "FAULHABER Drive Systems | Reliable & combinable",
      "url": "https://www.faulhaber.com/en/"
    },
    {
      "title": "White",
      "url": "https://whitedriveproducts.com/"
    },
    {
      "title": "Grupo Kopar - Automatización y Robótica Industrial",
      "url": "https://kopar.mx/"
    },
    {
      "title": "Shock Absorbers - Gas Springs - Vibration Technology",
      "url": "https://www.acecontrols.com/"
    },
    {
      "title": "Test and Measurement Products",
      "url": "https://automation.honeywell.com/us/en/products/sensing-solutions/test-and-measurement"
    },
    {
      "title": "Pressure and Temperature Calibration",
      "url": "https://www.mensor.com/en-us/startpage.WIKA"
    },
    {
      "title": "Pressure Transducer Manufacturer",
      "url": "https://transducersdirect.com/"
    },
    {
      "title": "Taber Transducer",
      "url": "https://www.tabertransducer.com/"
    },
    {
      "title": "Pressure Measurement Instruments",
      "url": "https://heise.com/"
    },
    {
      "title": "Vaccon",
      "url": "https://materialhandling.norgren.com/en/vaccon"
    },
    {
      "title": "Ac-Dc Power Supplies and Dc-Dc Converters | CUI Inc",
      "url": "https://www.cui.com/"
    },
    {
      "title": "Linear Motion Optimized",
      "url": "https://www.thomsonlinear.com/en/index"
    },
    {
      "title": "Magnetic encoders",
      "url": "https://www.rls.si/eng/products"
    },
    {
      "title": "Compumotor E-Commerce - Shipping Destinations and Terms Of Sale",
      "url": "https://buy.compumotor.com/e_location.asp?destination="
    },
    {
      "title": "Parkermotion",
      "url": "https://www.parkermotion.com/"
    },
    {
      "title": "Motor Testing & Sensors, Torque Mesearument, Hysteresis Dynamometer, Load Cells",
      "url": "https://www.magtrol.com/"
    },
    {
      "title": "Phoenix Contact Mexico",
      "url": "https://www.phoenixcontact.com/en-mx/"
    },
    {
      "title": "Kele, Inc.",
      "url": "https://www.kele.com/"
    },
    {
      "title": "Surplus Center",
      "url": "https://www.surpluscenter.com/"
    },
    {
      "title": "Air Cylinders, Solenoid Valves and Pneumatics | SMC Corporation of America",
      "url": "https://www.smcusa.com/en/home"
    },
    {
      "title": "Piab",
      "url": "https://www.piab.com/en-us"
    },
    {
      "title": "Homepage - Timken Aurora Bearing",
      "url": "https://www.timkenaurorabearing.com/"
    },
    {
      "title": "Renishaw",
      "url": "https://www.renishaw.com/en/renishaw-enhancing-efficiency-in-manufacturing-and-healthcare--1030"
    },
    {
      "title": "Midwest Motion Products",
      "url": "https://www.midwestmotion.com/index.htm"
    },
    {
      "title": "Global Manufacturer of Seals Springs and Contacts",
      "url": "https://www.balseal.com/"
    },
    {
      "title": "Metalworking tools and MRO Supplies",
      "url": "https://www.mscdirect.com/"
    },
    {
      "title": "Automation Control Products sold Factory Direct at Great Prices",
      "url": "https://www.ezautomation.net/index.htm"
    },
    {
      "title": "Load Cell | Torque Sensors | Force Measurement Solutions",
      "url": "https://www.futek.com/home"
    },
    {
      "title": "Dynapar Encoders: Absolute Encoder & Rotary Encoder",
      "url": "https://www.dynapar.com/"
    },
    {
      "title": "Industrial Magnet Manufacturer",
      "url": "https://www.arnoldmagnetics.com/"
    },
    {
      "title": "Dexter",
      "url": "https://www.dextermag.com/"
    },
    {
      "title": "Battery Management Systems (BMS) for large Li-ion batteries",
      "url": "https://elithion.com/index.php"
    },
    {
      "title": "Ap Tech",
      "url": "https://aptech-online.com/"
    },
    {
      "title": "Nookindustries | Linear Motion Systems & Solutions",
      "url": "https://www.nookindustries.com/"
    },
    {
      "title": "HTM Sensors",
      "url": "https://www.htmsensors.com/"
    },
    {
      "title": "Pneumatic Control Systems | Pneumatic Components",
      "url": "https://www.pneumadyne.com/index.php"
    },
    {
      "title": "Pneumatic Depot",
      "url": "https://pneumaticdepot.com/"
    },
    {
      "title": "Strong Rare Earth Neodymium Magnets - Low prices, Fast shipping, Huge inventory | K&J Magnetics",
      "url": "https://www.kjmagnetics.com/"
    },
    {
      "title": "Motion Control Products - Designed and Built in the Pacific Northwest | US Digital",
      "url": "https://www.usdigital.com/"
    },
    {
      "title": "TE Sensors",
      "url": "https://www.te.com/en/products/sensors.html"
    },
    {
      "title": "Potentiometers.com Stock and Custom Potentiometers",
      "url": "https://www.potentiometers.com/index.cfm"
    },
    {
      "title": "NIDEC COMPONENTS Global",
      "url": "https://www.nidec-components.com/e/"
    },
    {
      "title": "ETI Home ETI Systems",
      "url": "https://etisystems.com/"
    },
    {
      "title": "Anaheim Automation - Your source for Stepper Motor, Brushless DC Motor, DC Motor, and Planetary Gearbox Products",
      "url": "https://anaheimautomation.com/"
    },
    {
      "title": "Elmo Motion Control | Motion Control Technology & Systems",
      "url": "https://www.elmomc.com/"
    },
    {
      "title": "VMECA Products",
      "url": "https://vmeca.com/en/?lan=en-us"
    },
    {
      "title": "Intralogistics, Supply Chain Automation & Warehouse Management Solutions",
      "url": "https://www.dematic.com/en-us/"
    },
    {
      "title": "DESTACO - Workholding Equipment & Automation Tooling Solutions",
      "url": "https://www.destaco.com/"
    },
    {
      "title": "Técnica de vacío: Automatización, manipulación, fijación | Schmalz",
      "url": "https://www.schmalz.com/es-mx/"
    },
    {
      "title": "PHD Inc. | Empowering Industrial Automation",
      "url": "https://www.phdinc.com/"
    },
    {
      "title": "SCHUNK – Competence leader for toolholding and workholding, gripping technology and automation technology",
      "url": "https://schunk.com/us/en?country=USA&r=1"
    },
    {
      "title": "Walker Industrial",
      "url": "https://www.walkerindustrial.com/"
    },
    {
      "title": "Motion Control Products",
      "url": "https://www.alliedmotion.com/"
    },
    {
      "title": "Baumer - Passion for Sensors",
      "url": "https://www.baumer.com/us/en"
    },
    {
      "title": "Automation Solutions for Manufacturers",
      "url": "https://www.gibsonengineering.com/"
    },
    {
      "title": "Relés, temporizadores, sensores de movimiento, dimmers, termostatos | Finder Mexico",
      "url": "https://www.findernet.com/es/mexico/"
    },
    {
      "title": "iAutomation",
      "url": "https://i-automation.com/"
    },
    {
      "title": "Pneumatic & electric automation technology | Festo USA",
      "url": "https://www.festo.com/us/en/"
    },
    {
      "title": "MAC Valves | Industrial Automation Leaders in Pneumatic Valces - Valves That Dont Stick",
      "url": "https://www.macvalves.com/"
    },
    {
      "title": "Miniature Precision Fluid Control",
      "url": "https://www.theleeco.com/"
    },
    {
      "title": "Fluid Power Products, Inc.: Hydraulic Components and Systems",
      "url": "https://www.fppinc.com/"
    },
    {
      "title": "Automation with Murrelektronik | stay connected",
      "url": "https://www.murrelektronik.com/"
    },
    {
      "title": "Ams Osram",
      "url": "https://www.reidsupply.com/en-us"
    },
    {
      "title": "English (United States) - Fellowes®",
      "url": "https://www.fellowes.com/us/en"
    },
    {
      "title": "ANVER Vacuum Material Handling Specialists",
      "url": "https://anver.com/"
    },
    {
      "title": "U Joints Made in the USA | Belden Universal Joints",
      "url": "https://beldenuniversal.com/index.php/"
    },
    {
      "title": "Quail Electronics Inc. ® - Electronic & Power Components Experts",
      "url": "https://www.quail.com/"
    },
    {
      "title": "Rotary Systems, Inc. » Expert Rotary Unions & Slip Rings",
      "url": "https://rotarysystems.com/"
    },
    {
      "title": "Engineered Fluid Solutions - Rotary Unions & Joints",
      "url": "https://www.dsti.com/"
    },
    {
      "title": "Hydro Leduc - Designer and manufacturer of hydraulic components",
      "url": "https://hydroleduc.com/?lang=en"
    },
    {
      "title": "UCT Fluid Solutions Group - Instrumentation valves, pipe & tube fittings, ultra clean valves & fittings",
      "url": "https://fs.uct.com/"
    },
    {
      "title": "Allegro MicroSystems | Innovation with Purpose",
      "url": "https://www.allegromicro.com/en/"
    },
    {
      "title": "Tricolor",
      "url": "https://aw-lake.com/products/?filters%5Bproduct-types%5D%5B%5D=11"
    },
    {
      "title": "Premium Sensing Solutions | Setra Systems",
      "url": "https://www.setra.com/"
    },
    {
      "title": "Motion",
      "url": "https://www.motion.com/"
    },
    {
      "title": "Kaman Corporation | Extend Your Reach",
      "url": "https://kaman.com/"
    },
    {
      "title": "Home - Lovejoy - a Timken company",
      "url": "https://www.lovejoy-inc.com/"
    },
    {
      "title": "start page - R+W Kupplungen",
      "url": "https://www.rw-couplings.com/"
    },
    {
      "title": "Pneumatic Systems and Automation Products | Air Incorporated",
      "url": "https://airinc.net/"
    },
    {
      "title": "Our Fluid Power Company is a Distributor for Top Brands",
      "url": "https://www.hydroair.net/about-us"
    },
    {
      "title": "Airline Hydraulics",
      "url": "https://www.airlinehyd.com/"
    },
    {
      "title": "Home - The Hope Group",
      "url": "https://www.thehopegroup.com/"
    },
    {
      "title": "CEJN Quick Connect Couplings | CEJN",
      "url": "https://www.cejn.com/"
    },
    {
      "title": "AutomationDirect.com | #1 Value in Industrial Automation",
      "url": "https://www.automationdirect.com/adc/home/home"
    },
    {
      "title": "Anixter &ndash; Wire and Cable, Networking, Security and Utility Power Solutions",
      "url": "https://www.anixter.com/en_us.html"
    },
    {
      "title": "Home - Durham Manufacturing",
      "url": "https://www.durhammfg.com/"
    },
    {
      "title": "Hubbell Incorporated | Electrify & Energize",
      "url": "https://www.hubbell.com/hubbell/en"
    },
    {
      "title": "Flow, level, liquid analysis, optical analysis, pressure, temperature measurement, software and system products | Endress+Hauser",
      "url": "https://www.us.endress.com/en#products/~products-instruments"
    },
    {
      "title": "KEYENCE CORPORATION OF AMERICA",
      "url": "https://www.keyence.com/"
    },
    {
      "title": "Home - Continental Hydraulics",
      "url": "https://continentalhydraulics.com/"
    },
    {
      "title": "NOSHOK, Inc | Measurement Solutions",
      "url": "https://www.noshok.com/"
    },
    {
      "title": "Power & energy meters, current transformers and energy software.",
      "url": "https://www.accuenergy.com/"
    },
    {
      "title": "Flotech",
      "url": "https://www.flotechinc.com/"
    },
    {
      "title": "HOME | Murata Manufacturing Co., Ltd.",
      "url": "https://www.murata.com/"
    },
    {
      "title": "Welcome to Red Lion | Red Lion",
      "url": "https://www.redlion.net/"
    },
    {
      "title": "Omron Industrial Automation",
      "url": "https://automation.omron.com/en/us/"
    },
    {
      "title": "High-Quality Fluid System Solutions & Components",
      "url": "https://www.swagelok.com/en"
    },
    {
      "title": "Small Mechanical Components: Precision Gears, Timing Belts, Gear Assemblies, Timing Belt Pulleys, Couplings, Bearings and much more from SDP/SI",
      "url": "https://sdp-si.com/"
    },
    {
      "title": "Tompkinsind",
      "url": "https://www.tompkinsind.com/"
    },
    {
      "title": "The Robot MarketPlace",
      "url": "https://www.robotmarketplace.com/"
    },
    {
      "title": "Northerntool Tool | Queality Tools for Serious Work",
      "url": "https://www.northerntool.com/"
    },
    {
      "title": "Molex | Connectors Distributor | Waytek",
      "url": "https://www.waytekwire.com/brands/molex"
    },
    {
      "title": "Jameco Electronics | Electronic Components Distributor",
      "url": "https://www.jameco.com/webapp/wcs/stores/servlet/StoreCatalogDisplay?storeId=10001&catalogId=10001&langId=-1"
    },
    {
      "title": "Microchip Technology | Empowering Innovation",
      "url": "https://www.microchip.com/"
    },
    {
      "title": "Omega Engineering | Sensing, Monitoring and Control Solutions",
      "url": "https://www.omega.com/en-us/"
    },
    {
      "title": "Time-saving embedded tools - MIKROE",
      "url": "https://www.mikroe.com/"
    },
    {
      "title": "McMaster-Carr",
      "url": "https://www.mcmaster.com/"
    },
    {
      "title": "Shop | Electronics123",
      "url": "https://www.electronics123.com/shop"
    },
    {
      "title": "Parallax Inc | Equip Your Genius®",
      "url": "https://www.parallax.com/"
    },
    {
      "title": "Broadcom Inc. | Connecting Everything",
      "url": "https://www.broadcom.com/"
    },
    {
      "title": "INEXGLOBAL",
      "url": "https://www.inexglobal.com/"
    },
    {
      "title": "Weidmuller",
      "url": "https://www.weidmuller.com/en/index.jsp"
    },
    {
      "title": "SparkFun Electronics",
      "url": "https://www.sparkfun.com/"
    },
    {
      "title": "Electronic Components Distributor - Mouser Electronics Europe",
      "url": "https://www.mouser.com/"
    },
    {
      "title": "DigiKey Home",
      "url": "https://www.digikey.com/"
    },
    {
      "title": "EXHIBITION | museepata",
      "url": "https://www.museepata.org/exhibition"
    },
    {
      "title": "Harvard Museum of Natural History",
      "url": "https://www.hmnh.harvard.edu/"
    },
    {
      "title": "Home",
      "url": "https://hmsc.harvard.edu/"
    },
    {
      "title": "Museum of Science",
      "url": "https://www.mos.org/"
    },
    {
      "title": "MIT Museum Homepage | MIT Museum",
      "url": "https://mitmuseum.mit.edu/"
    }
  ];

}
