export default function HelloWorld(){
    const propsUserCard = {
    
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard
             nama="Fikri" 
             nim="169412"
             tanggal={new Date().toLocaleDateString()}
             
           />
             <UserCard {...propsUserCard}/>

             <img src="img/e98256f800cc4b371077fc50666cc85b.gif" alt="logo" />
        </div>
    )
}

function GreetingBinjai() {

}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){


    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>

            
            
        </div>
    )
}



