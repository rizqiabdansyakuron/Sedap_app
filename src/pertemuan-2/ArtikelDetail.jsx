export default function QNA() {
    const propsUserCard = {
        JUDUL: "Question Answer",
    };

    return (
        <Container>
            <Gambar {...propsUserCard} />
            <QuoteText />
            <AdditionalContent />
            <AnotherImage />
            <AnotherQuote />
        </Container>
    );
}

function Container({ children }) {
    return (
        <div className="card">
            <h1>Artikel Hari Ini</h1>
            <br />
            {children}
            <br />
        </div>
    );
}

function Gambar(props) {
    return (
        <div className="image-container">
            <img src="img/e98256f800cc4b371077fc50666cc85b.gif" alt="logo" />
        </div>
    );
}

function QuoteText() {
    const text = "Bayangkan sebuah dunia di mana sistem transportasi mengandalkan GYAT untuk mengoptimalkan rute secara real-time, di mana setiap perawatan kesehatan didasarkan pada analisis data yang langsung diterima dari seluruh dunia, atau di mana interaksi antar perangkat dilakukan dengan kecepatan yang melebihi batas kemampuan manusia saat ini. GYAT tidak hanya menjanjikan kemajuan dalam industri besar, tetapi juga memperkenalkan perubahan signifikan dalam kehidupan sehari-hari kita.";

    return (
        <div className="quote-container">
            <hr />
            <p>{text.toLowerCase()}</p>
        </div>
    );
}

// Konten tambahan
function AdditionalContent() {
    return (
        <div className="additional-content">
            <h3>Judul Konten Tambahan</h3>
            <p>Ini adalah konten tambahan yang memberikan lebih banyak informasi mengenai topik yang sedang dibahas.</p>
        </div>
    );
}


function AnotherImage() {
    return (
        <div className="image-container">
            <img src="img/84420d170aafee45a0d3531510c8af21 (1).jpg" alt="Additional Image" />
        </div>
    );
}


function AnotherQuote() {
    const text = "Teknologi terus berkembang dan membentuk masa depan kita. Dengan GYAT, kita dapat menjawab tantangan besar yang dihadapi oleh dunia saat ini.";

    return (
        <div className="quote-container">
            <hr />
            <p>{text}</p>
        </div>
    );
}
