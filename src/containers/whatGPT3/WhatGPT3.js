import React from "react";
import Features from "../features/Features";
import "./whatgpt3.css";

export default function WhatGPT3() {
  return (
    <div className="whatGPT3__maindiv">
      <div className="whatGPT3__row1">
        <div className="whatGPT3__heading">
          <h1>What is GPT-3</h1>
        </div>
        <div className="whatGPT3__para">
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>

      <div className="whatGPT3__row2 gpt__padding">
        <div>
          <h1 className="GPT3__gradient-heading gradient__text">
            The possibilities are beyond <br />
            your imagination
          </h1>
        </div>
        <div>
          <p className="GPT3__text-para">Explore The Library</p>
        </div>
      </div>

      <div className="whatGPT3__row3">
        <div className="whatGPT3__row3-div1">
          <Features
            title="Chatbots"
            para="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div className="whatGPT3__row3-div2">
          <Features
            title="Knowledgebase"
            para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          />
        </div>
        <div className="whatGPT3__row3-div3">
          <Features
            title="Education"
            para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          />
        </div>
      </div>
    </div>
  );
}
