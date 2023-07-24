import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ContactInformation from './CheckoutSection/ContactInformation';
import OrderSection from './CheckoutSection/OrderSection';
import { useTitle } from '../../Hooks/useTitle';
import { useForm } from 'react-hook-form';

const CheckoutLayoutPage = () => {
  useTitle('Checkout');
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <>
      <Breadcrumb />
      <from
        onSubmit={handleSubmit(onSubmit)}
        className='section-div w-full grid lg:grid-cols-3 items-start gap-8'
      >
        <ContactInformation register={register} />
        <OrderSection />
      </from>
    </>
  );
};

export default CheckoutLayoutPage;
