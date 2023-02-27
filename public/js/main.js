document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click',(e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let tajuk = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML: '<i>Tiada informasi</i>';
        

        let tombolModal = document.querySelector('.btnModal')
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = tajuk;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-300');
        document.querySelector('.modalImage').innerHTML="";
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML=deskripsi;
        document.querySelector('.modalHarga').innerHTML=harga;

        const nohp = '62857123123';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Salam Bro, Nak satu buku ini ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});