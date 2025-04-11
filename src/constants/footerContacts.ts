type ContactInfo = {
    country: string;
    address?: string[];
    tel?: string;
    email?: string;
  };
  
  export const contacts: ContactInfo[] = [
    {
      country: "Nigeria",
      address: [
        "55G Adebisi Omotola Close",
        "Off Samuel Adedoyin Street",
        "Victoria Island",
      ],
      tel: "+234 818 444 1404",
    },
    {
      country: "United Kingdom",
      address: [
        "39 Kenyon Lane, Off Moston Lane",
        "Moston, Manchester",
        "United Kingdom, M40 9JG",
      ],
      tel: "+44 161 948 1444",
    },
    {
      country: "United Arab Emirates",
      tel: "+971 50 423 8817",
    },
    {
      country: "Canada",
      tel: "+1 647 977 1435",
    },
    {
      country: "Email",
      email: "enquiries@keysystemltd.com",
    },
  ];
  