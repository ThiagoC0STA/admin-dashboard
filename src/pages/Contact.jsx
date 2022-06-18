import React from 'react';
import { Header } from '../components';
import { socialMedias } from "../data/dummy"

function Contact() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Contact" title="Contact me on my social medias:" />
      <div className="flex min-h-max justify-between mt-20 p-10">
        {socialMedias.map((item) => (
          <a title={item.media} className="transition ease-in-out delay-75 p-5 rounded-lg cursor-pointer hover:bg-gray-300 hover:scale-125 duration-300" target="_blank" href={item.links} key={item.name} rel="noreferrer">{item.icon}</a>
        ))}
      </div>
    </div>
  )
}

export default Contact;
