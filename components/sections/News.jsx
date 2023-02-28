import React from 'react'

const News = () => {
  return (
    <div className='pt-20 mx-auto max-w-7xl'>
        <div className='grid grid-cols-4 gap-4'>
            {
                [
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"	https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Otaniemi_Garden_plots_3-6-2020_photo_Mikko_Raskinen_003_0.jpg?itok=EVAqWCov",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto%20University%20Va%CC%88re%20Tuomas%20Uusheimo-180709-aalto-vare-015.jpg?itok=NC-cFdJt",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/4.jpg?itok=bBFQivt1",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/La%CC%88nsimetro_avajaiset_18112017_%C2%A9JaakkoKahilaniemi-1322.jpg?itok=e_etvHDg",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/midgard/images/1e75bf8f2258e8a5bf811e7b96a6dad767c7f287f28-aaltofestival_naytos16_student-ma-collection_23_maija_mero_25-5-2016_photo_mikko_raskinen_035_en_en_fi_fi.jpg?itok=EDU7K7gC",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/37135037943_32840d9184_o.jpg?itok=TWi344qA",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    },
                    {
                        image:"	https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_Vision_Forum_07062018_photo_by_Lasse_Lecklin_014%281%29.jpg?itok=2HnTV-qn",
                        title: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
                    }
                ].map((e,key)=>{
                    return (
                        <div key={key} className='grid'>
                            <img  src={e.image} alt="" />
                            <p>{e.title}</p>
                        </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default News