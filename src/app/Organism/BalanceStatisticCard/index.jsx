import React from "react";
import BalanceStatistic from "@/app/Molecules/BalanceStatistic";
import Card from "@/app/Atoms/Card";
import Image from "next/image";
import "./Balance.scss";
import ThisMonthStatistic from "@/app/Molecules/ThisMonthStatistic";

const BalaceStatisticCard = ({ dataBalance, dataThisMonth }) => {
  return (
    <div className="balance-card">
      <Card>
        <h4>Balance statistics</h4>
        <div className="balance">
          <div className="info-balance">
            <h2>$ 14,737.6</h2>
            <div className="image-container">
              <Image
                className="image-coin"
                src={"/assests/coin.png"}
                alt=""
                width={100}
                height={100}
              />
              <span>Your total balance</span>
            </div>
            <div className="this-month">
              <span>this month</span>
              <ThisMonthStatistic dataBalance={dataThisMonth} />
            </div>
          </div>
          <div className="balance-bar">
          <BalanceStatistic dataBalance={dataBalance} />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BalaceStatisticCard;
