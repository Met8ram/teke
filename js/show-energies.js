(function(window, document) {
  ("use strict");

  ShowEnergies = {
    energyList: [],
    findDescription: function(coreEnergy,talent1,talent2) {

      let request = new XMLHttpRequest();
      request.open("GET", "/js/energy-description.json", false);
      request.send(null);
      let data = JSON.parse(request.responseText);

      for (let num in data.core.energies) {
        if(num == coreEnergy){
          this.energyList.core = data.core.energies[num];
        }
      }

      for (let num in data.talents.energies) {
        if(num == talent1){
          this.energyList.talent1 = data.talents.energies[num];
        }
        if(num == talent2){
          this.energyList.talent2 = data.talents.energies[num];
        }
      }

      let energyEl = document.getElementById('energy-description');

      energyEl.innerHTML = `
        <div class="mb-5">
          <p class="h3 text-center"><span class="small me-2"><i class="fa-solid fa-atom small"></i></span>Your Core Energy</p>
          <p class="small text-center">How do you feel yourself</p>
        
          <div class="text-box text-box--light">
            <div class="text-box__title text-center">
              <span class="fw-bold">${this.energyList.core.name}</span>
            </div>
            <div class="text-box__content">
            ${this.energyList.core.description}
            </div>
          </div>
        </div>

        <div class="mb-5">
        <p class="h3 text-center"><span class="small me-2"><i class="fa-regular fa-circle-user small"></i></span>Your Main Personal Qualities</p>
        <p class="small text-center">How the world and others see you</p>
      
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="text-box text-box--light">
              <div class="text-box__title text-center">
                <span class="fw-bold">${this.energyList.talent1.name}</span>
              </div>
              <div class="text-box__content">
                ${this.energyList.talent1.description}
                <p class="small"><a href="https://buymeacoffee.com/marina.teke/e/258649" target="_blank"><i class="fa-regular fa-file-lines"></i> Read more in the full report...</a></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="text-box text-box--light">
              <div class="text-box__title text-center">
                <span class="fw-bold">${this.energyList.talent2.name}</span>
              </div>
              <div class="text-box__content">
                ${this.energyList.talent2.description}
                <p class="small"><a href="https://buymeacoffee.com/marina.teke/e/258649" target="_blank"><i class="fa-regular fa-file-lines"></i> Read more in the full report...</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    }
  };

  window.ShowEnergies = ShowEnergies;

})(window, document);