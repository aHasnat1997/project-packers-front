import React from 'react';

/**
 * Status Badge
 * @param {String} badgeTitle Badge Title 
 * @returns Badge with Color
 */

const StatusBadge = ({ badgeTitle = String }) => {
  const statusBadgeColorInfo = [
    {
      title: 'Paid',
      dotColor: 'bg-[#475569]',
      bgColor: 'bg-[#E4E5E7]'
    },
    {
      title: 'Pending Payment',
      dotColor: 'bg-[#475569]',
      bgColor: 'bg-[#E4E5E7]'
    },
    {
      title: 'Refunded',
      dotColor: 'bg-[#475569]',
      bgColor: 'bg-[#94A3B8]'
    },
    {
      title: 'Abandoned',
      dotColor: 'bg-[#475569]',
      bgColor: 'bg-[#E4E5E7]'
    },
    {
      title: 'Completed',
      dotColor: 'bg-[#15803D]',
      bgColor: 'bg-[#86EFAC]'
    },
    {
      title: 'Processing',
      dotColor: 'bg-[#8C651A]',
      bgColor: 'bg-[#F7DA7C]'
    },
    {
      title: 'Pending',
      dotColor: 'bg-[#8C651A]',
      bgColor: 'bg-[#F7DA7C]'
    },
    {
      title: 'Closed',
      dotColor: 'bg-[#B91C1C]',
      bgColor: 'bg-[#FECACA]'
    },
    {
      title: 'Cancel',
      dotColor: 'bg-[#B91C1C]',
      bgColor: 'bg-[#FECACA]'
    },
    {
      title: 'Cancelled',
      dotColor: 'bg-[#B91C1C]',
      bgColor: 'bg-[#FECACA]'
    },
    {
      title: 'Estimate Sent',
      dotColor: 'bg-[#092F3F]',
      bgColor: 'bg-[#A2EEE7]'
    },

  ]

  const statusBadgeColor = statusBadgeColorInfo?.find(info => info.title === badgeTitle);



  return (
    <div>
      <span
        className={`p-2 rounded-full flex gap-2 items-center w-fit ${statusBadgeColor?.bgColor}`}
      >
        <span className={`w-2 h-2 rounded-full ${statusBadgeColor?.dotColor}`} />
        <span>{badgeTitle}</span>
      </span>
    </div>
  );
};

export default StatusBadge;
