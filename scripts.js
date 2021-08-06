// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeoffButton = document.getElementById('takeoff')
    const landButton = document.getElementById('landing')
    const abortMissionButton = document.getElementById('missionAbort')


    let flightStatus = document.getElementById('flightStatus')
    let shuttleBackground = document.getElementById('shuttleBackground')
    let shuttleHeight = document.getElementById('spaceShuttleHeight')
   

    takeoffButton.addEventListener('click', () => {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff")
        if(takeoffConfirm){
            flightStatus.innerText = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            let thenumber = Number(shuttleHeight.innerText)
            thenumber += 10000
            shuttleHeight.innerText = thenumber
        }
    })

    landButton.addEventListener('click', ()=>{
        alert("The shuttle is landing. Landing gear engaged")
        flightStatus.innerText = "the shuttle has landed"
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeight.innerText = 0
    })

    abortMissionButton.addEventListener('click', ()=>{
        let missionAbortConfirm = window.confirm("Confirm that you want to abort the mission.")
        if(missionAbortConfirm){
            flightStatus.innerText = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green"
            shuttleHeight.innerText = 0
        }
    })

    const directionalButtons = document.querySelectorAll(".directionalButtons button")
    let upButton = document.getElementById('up')
    let downButton = document.getElementById('down')
    let leftButton = document.getElementById('left')
    let rightButton = document.getElementById('right')
    let rocket = document.getElementById('rocket')

    upButton.addEventListener('click', ()=>{

    })
    downButton.addEventListener('click', ()=>{

    })
    leftButton.addEventListener('click', () =>{        
        rocket.style.right = `${Number(rocket.style.right)+10}px`
    })
    rightButton.addEventListener('click', ()=>{

    })

    for(const dbutton in directionalButtons){
        dbutton.addEventListener('click', () => {
            switch(button.innerText){
                case "Up":
                    break
                case "Down":
                    break
                case "Left":
                    break
                case "Right":
                    break
            }
        })
    }
}
window.addEventListener('load', init)