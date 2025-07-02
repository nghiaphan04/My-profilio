'use client';

import Image from 'next/image';

const gifs = [
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M294MGs2bnRha2pmenpkMGt2OWNjcm1xNnc3dGZrc2xpeHV3azR6cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/XZgemSAbwljyNWg3KL/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M294MGs2bnRha2pmenpkMGt2OWNjcm1xNnc3dGZrc2xpeHV3azR6cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/ZdHsPsHUdWr882Uu85/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M294MGs2bnRha2pmenpkMGt2OWNjcm1xNnc3dGZrc2xpeHV3azR6cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/l0RynuSRzRLVjJbMrT/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGFvdnhoZnBkbWlzZThleHduNDZkYWJ0YW53ejUwa2Zpbmtqd2hheiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/yc2pHdAoxVOrJ2m5Ha/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGFvdnhoZnBkbWlzZThleHduNDZkYWJ0YW53ejUwa2Zpbmtqd2hheiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/dxCQ6QDi6sqjvMtsIA/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGFvdnhoZnBkbWlzZThleHduNDZkYWJ0YW53ejUwa2Zpbmtqd2hheiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/H5Ad3kUEUSiYhbCrNH/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGludzJmdWh1YnU1czNhNWV2N2Ewb204M2NrYzc3ZzQwNG9jb2RwaiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/d8R5HipWkYcNJAnGX9/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/l0IyiygAO1k6RBTtS/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGludzJmdWh1YnU1czNhNWV2N2Ewb204M2NrYzc3ZzQwNG9jb2RwaiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/d95u1NSB9v3DZYnmeZ/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/FpGwvvqgD0mtO/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/6xNz1sIh6FmOxHuboJ/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/QvNFckWaZ0JMMtosIs/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/xlcR4sYSBT34fQqApS/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWNxOXhta2hla3lraDNsY3JjdGo4bWtpcHVpeTY5NjJ4aTduYmU4aiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/VXWyVyHi66NhTtpX2S/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p5MnJ1ams3cDFtaTB6czFlc2ppMzF3ZW11eDhxejJkbjFvYTcwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Vzebl1kx67Dlp0Q4f1/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p5MnJ1ams3cDFtaTB6czFlc2ppMzF3ZW11eDhxejJkbjFvYTcwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Spnk1yRMApUIjh10qG/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p5MnJ1ams3cDFtaTB6czFlc2ppMzF3ZW11eDhxejJkbjFvYTcwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Vcwi2ZdTTDtv2kS889/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p5MnJ1ams3cDFtaTB6czFlc2ppMzF3ZW11eDhxejJkbjFvYTcwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/J5XbU9sqTBHGx9CAeZ/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p5MnJ1ams3cDFtaTB6czFlc2ppMzF3ZW11eDhxejJkbjFvYTcwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/kOf1ejEZXXTqIymsJm/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MGE3YnU1azg3cjc1bzA3MmNoZno3YTRzemRwa2lrZTloOTBmbms3bSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/KmxmoHUGPDjfQXqGgv/giphy.gif',
  'https://media.giphy.com/media/f5uw06bJXPhiU5wW02/giphy.gif',
  'https://media.giphy.com/media/cgeIlE3eVw727mnPsK/giphy.gif',
  'https://media.giphy.com/media/iG3qxkWRCh3wmrieDC/giphy.gif',
  'https://media.giphy.com/media/VG27YERQvncCZUKsGW/giphy.gif',
  'https://media.giphy.com/media/U54Bg4vMQc9s4RcHr9/giphy.gif',
  'https://media.giphy.com/media/Xbxt2mjawHkSVWilpZ/giphy.gif',
  'https://media.giphy.com/media/giuGGfqCIZeSLDWWYa/giphy.gif',
  'https://media.giphy.com/media/h8CD39vtPVoMEoqZZ3/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTB5YmRjeGFqczBuMHB0NnJyaHNhYTg3MHB4dnpuMnI4Z3o0bGowaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PUyO4KmKWX5D2MzH3w/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cXpqMzRjZ2ZnY2JnYjFjODNhemhsN3JkMmJ5ZjdsY2R0bGZrYTlveCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ygi6kluaFJODAuUPI6/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cm1tNTdrempndGRwcnl6emZ0dnRmdHNsZjFsbnBlYTN1aDlhNW15bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bJKoZVwZVQLr9PAP2K/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGludzJmdWh1YnU1czNhNWV2N2Ewb204M2NrYzc3ZzQwNG9jb2RwaiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Y3wzF9erUbjfvs3QFo/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bjE5NGRvbGJobWMwNXRwMDlqamFxemozY2R3a2VpYnljbGowdTUyMiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/0OgdJVNjbcIifqSb7U/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bjE5NGRvbGJobWMwNXRwMDlqamFxemozY2R3a2VpYnljbGowdTUyMiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/wPnbkEcr2tXiTN0Lmq/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bGloZmluOTk2ejUzaDNuMGg3NzNpZmRzaGJuYjZuajRqOW4xaHd1eCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/DxjH5K0URCEtSALKjp/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnVveGp0N2RibGdiMWE3emc1cDVreGxjZzE2Y2tucHAxMmxqZWVlZCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/O4Et0V2ipvhL2/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnVveGp0N2RibGdiMWE3emc1cDVreGxjZzE2Y2tucHAxMmxqZWVlZCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/WRQmnmsUpIjtOcUOSP/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emllb2N4anlqOHpjZm1zd2dkNHg1bzYwbDJ4YWQzNW9qbXRkd3VuOSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/SScTyz7dQ0Gf7c9dZ9/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MW1hYmp5ZXE1aDF3NjV5cTI1cnB2a2Zla3Zqa2NtaDlhYW0wdjNkMiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/SV6PmSd9PXZc2jvx1C/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azE5NGtkcG55MTQ4NjR6YjB3aG81N3VkZXNwM2xscWR5cDF2c3RhciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/NTT0v8E876sUYYboou/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am51cG9oeGgxeHVmZjR5Y2pkdGhiejI1ZTVtNGNvcTNwNDQ5dzBmbCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/BZsKRjTclYysN4fpOC/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2w3bjR4bjlxY3JtaHpzNTI1NXJienBscDNtMnJibDZnNjNpOTBpbSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/WmtamjHZys1MohYGPT/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2w3bjR4bjlxY3JtaHpzNTI1NXJienBscDNtMnJibDZnNjNpOTBpbSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/h4ZWWyJwTzp1yUHW3q/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MTc1b2R3Z2c2a3l4ZW9pbTM2b2Y0czJid2MycmkwMjViMzE1NDh3cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/RKScjAsZNqPjVLQ4rn/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MTc1b2R3Z2c2a3l4ZW9pbTM2b2Y0czJid2MycmkwMjViMzE1NDh3cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/AR9Y7WUwTTXwpBF7Od/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MTc1b2R3Z2c2a3l4ZW9pbTM2b2Y0czJid2MycmkwMjViMzE1NDh3cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/KmxmoHUGPDjfQXqGgv/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dzMzZGk3em5yb2RkYjM1aTlyODJiaTl3dnNhNDcybGMxeWdxMm8zcCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/DxjH5K0URCEtSALKjp/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Yzg3amFkZWJlcWZhN2FxYXJsMWhqYW04cm80c3VranlvM2xudzBubSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/041TsCVeVrsvUzTKGp/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Yzg3amFkZWJlcWZhN2FxYXJsMWhqYW04cm80c3VranlvM2xudzBubSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/WRQmnmsUpIjtOcUOSP/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2tibHlzMWpmZG4zYmJ3djJ1amphbGUxbWRjbm11dHJwNHkzN2VmaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TUOSneOOtImPurKwph/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRnbGV1MXp3dm53MTBzb2w4NHg3MWlobXlsa3ZtaTA2bTJmd2p2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt1CbqzTd36KXYY/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW45ZW1lYnQ3NWkwdzAyYWQ4dDJraXdjcTlpenZ1OGdlZDd5cnlnbiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/iGwIFdyvV3Xrimie3h/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW45ZW1lYnQ3NWkwdzAyYWQ4dDJraXdjcTlpenZ1OGdlZDd5cnlnbiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/lRogFwW6XHxoNTxHjy/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW45ZW1lYnQ3NWkwdzAyYWQ4dDJraXdjcTlpenZ1OGdlZDd5cnlnbiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/d8R5HipWkYcNJAnGX9/giphy.gif',

  
  
];

const CutePage = () => {
  return (
    <div className="p-6 pt-28 bg-white min-h-screen grid grid-cols-6 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
      {gifs.map((src, index) => (
        <div key={index} >
          <Image
            src={src}
            alt={`Cute GIF ${index + 1}`}
            width={50}
            height={50}
            className="object-cover "
          />
        </div>
      ))}
    </div>
  );
};

export default CutePage;
