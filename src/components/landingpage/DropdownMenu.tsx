import React from 'react'

export default function DropdownMenu({ title, items }:any) {
    return (
      <div className="relative group">
        <button className="text-gray-700 hover:text-[#134783]">
          {title}
        </button>
        <div className="absolute hidden group-hover:block z-50 w-[40rem] bg-white shadow-lg mt-2 ">
          <ul className="py-2 w-full divide-y flex divide-gray-200 ">
            {items.map((category:any, idx:any) => (
              <li key={idx} className="p-4">
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
                <ul className="mt-2 space-y-1">
                  {category.links.map((link:any, linkIdx:any) => (
                    <li key={linkIdx}>
                      <a
                        href='#'
                        className="block text-gray-600 hover:text-[#134783]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  