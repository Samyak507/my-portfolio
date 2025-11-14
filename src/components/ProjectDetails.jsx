import React from 'react'

const ProjectDetails = ({ title, description, subDescription, href, image, tags, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-xl max-h-[85vh] rounded-2xl bg-gradient-to-br from-midnight to-navy border border-white/10 shadow-lg overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 bg-midnight/80 hover:bg-gray-600 rounded-md transition"
        >
          <img src="/assets/close.svg" className="w-5 h-5" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />

        {/* Scrollable Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[45vh] text-neutral-300">
          <h5 className="text-2xl font-semibold text-white">{title}</h5>

          <p className="text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="text-neutral-400">{subDesc}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-white/10 bg-midnight/40 backdrop-blur-sm">
          <div className="flex gap-3">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="w-8 h-8 rounded-md hover:scale-110 transition"
              />
            ))}
          </div>

          <a
            href={href}
            target="_blank"
            className="flex items-center gap-1 text-white hover:underline hover:opacity-80 transition"
          >
            View Project
            <img src="/assets/arrow-up.svg" className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails
