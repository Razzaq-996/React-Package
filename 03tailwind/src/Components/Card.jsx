import React from 'react'

function Card(props) {
  return (
   <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h2 className="font-bold  bg-white">{props.username}</h2>
          </div>
          <div className="flex  justify-between">
           <button className="btncolor-green text-sm font-bold px-3 py-1">
  {props.btnText}
</button>

            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        

  
  )
}

export default Card
