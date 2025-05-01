'use client'
import ServiceItem from "../../../components/ServiceItem"

const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
  },
  {
    id: '03',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
  },
  {
    id: '04',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
  },
]

const ServicePage = () => {
  return (
    <section className="min-h-screen text-white py-16 px-4 flex justify-center items-center">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceItem key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ServicePage
