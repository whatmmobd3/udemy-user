export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to ',this.activeToInactiveCounter);
    }
    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive to ',this.inactiveToActiveCounter);
    }
}