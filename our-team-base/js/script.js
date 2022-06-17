// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

const membriarray = [
    {
        namemember: 'Wayne Barnett',
        jobmember: 'Founder & CEO',
        memberimg: 'img/wayne-barnett-founder-ceo.jpg'
      },
   {
     namemember: 'Angela Caroll',
     jobmember: 'Chief Editor',
     memberimg: 'img/angela-caroll-chief-editor.jpg'
   }, 
   {
    namemember: 'Walter Gordon',
    jobmember: 'Office Manager',
    memberimg: 'img/walter-gordon-office-manager.jpg'
   },
   {
    namemember: 'Angela Lopez',
    jobmember: 'Social Media Manager',
    memberimg: 'img/angela-lopez-social-media-manager.jpg'
   },
   {
    namemember: 'Scott Estrada',
    jobmember: 'Developer',
    memberimg: 'img/scott-estrada-developer.jpg'
   },
   {
    namemember: 'Barbara Ramos',
    jobmember: 'Graphic Designer',
    memberimg: 'img/barbara-ramos-graphic-designer.jpg'
   }   
];

const classContainer = document.querySelector('.team-container');

for(let i = 0; i<membriarray.length; i++){
    const thisClass = membriarray[i];
    console.log(thisClass);

    const NewClass = `
        <div class="team-card">
            <div class="card-image">
              <img
                src= ${thisClass.memberimg}
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${thisClass.namemember}</h3>
              <p>${thisClass.jobmember}</p>
            </div>
        </div>
`;

classContainer.innerHTML += NewClass;

}

