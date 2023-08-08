function sayHi() {
    console.log("HI");
    console.log(this);
}

//let e const não são adcionado ao objeto window

const protag = {
    first: "Astra",
    last: "Ashwood",
    nickName: "The Chimera",
    fullName() {
        const {first, last, nickName} = this;
        return `${first} ${last}, AKA ${nickName}.`;
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is wanted for the crime of heresy!`)
    }
}

