
const Card = ({ title, titlecomplete, iconsvg, price }) => {
    return (
        <div className="scale-100 md:scale-[1.2] lg:scale-[1.4] origin-top-left">
            <div className="relative w-[490px] h-[311px] bg-[#153535] rounded-[34px] shadow-[1px_4px_30px_8px_rgba(27,66,66,1)]">

                {/* Rectangle 9 lateral */}
                <div className="absolute right-0 top-0 w-[122px] h-[311px] bg-[#061922] rounded-[0px_34px_34px_0px] flex items-center justify-center">

                    <div className="flex flex-col items-center">
                        {/* Percentage boxes */}
                        {/* 1h */}
                        <div className="relative w-[92px] h-[55px]">
                            <div className="absolute left-[36px] top-[0px] w-[20px] h-[21px] text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">1h</div>
                            <div className="absolute left-[0px] top-[28px] w-[92px] h-[27px] bg-[rgba(241,86,83,0.2)] border border-[#F15653] rounded-[8px]">
                                <div className="absolute left-[17px] top-[3px] w-[58px] h-[21px] text-[#F15653] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3]">-0.39%</div>
                            </div>
                            <div className="absolute left-[0px] top-[21px] w-[92px] h-[0px] border-t border-[#6B74A3]"></div>
                        </div>

                        {/* 6h */}
                        <div className="relative w-[92px] h-[55px] mt-[15px]">
                            <div className="absolute left-[32px] top-[0px] w-[29px] h-[21px] text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">6h</div>
                            <div className="absolute left-[0px] top-[28px] w-[92px] h-[27px] bg-[rgba(241,86,83,0.2)] border border-[#F15653] rounded-[8px]">
                                <div className="absolute left-[17px] top-[3px] w-[58px] h-[21px] text-[#F15653] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3]">-1.49%</div>
                            </div>
                            <div className="absolute left-[0px] top-[21px] w-[92px] h-[0px] border-t border-[#6B74A3]"></div>
                        </div>

                        {/* 12h */}
                        <div className="relative w-[92px] h-[55px] mt-[15px]">
                            <div className="absolute left-[32px] top-[0px] w-[29px] h-[21px] text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">12h</div>
                            <div className="absolute left-[0px] top-[28px] w-[92px] h-[27px] bg-[rgba(6,217,98,0.2)] border border-[#06D962] rounded-[8px]">
                                <div className="absolute left-[22px] top-[3px] w-[48px] h-[21px] text-[#06D962] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3]">1.02%</div>
                            </div>
                            <div className="absolute left-[0px] top-[21px] w-[92px] h-[0px] border-t border-[#6B74A3]"></div>
                        </div>

                        {/* 24h */}
                        <div className="relative w-[92px] h-[55px] mt-[15px]">
                            <div className="absolute left-[32px] top-[0px] w-[29px] h-[21px] text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">24h</div>
                            <div className="absolute left-[0px] top-[28px] w-[92px] h-[27px] bg-[rgba(6,217,98,0.2)] border border-[#06D962] rounded-[8px]">
                                <div className="absolute left-[22px] top-[3px] w-[48px] h-[21px] text-[#06D962] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3]">2.39%</div>
                            </div>
                            <div className="absolute left-[0px] top-[21px] w-[92px] h-[0px] border-t border-[#6B74A3]"></div>
                        </div>

                    </div>



                </div>




                <div className='absolute top-4 left-4 flex items-center'>
                    
                    {/* Rectangle 8 */}
                    <div className="w-[131px] h-[131px] bg-[#153535] rounded-[34px] shadow-[inset_1px_4px_10px_2px_rgba(6,25,34,1)] flex items-center justify-center">
                        {/* Vector */}
                        <img src={iconsvg} alt="Bitcoin" className="w-[46px] h-[73px]" />
                    </div>

                    <div id="titulos" className="flex flex-col justify-center">
                        {/* BTC */}
                        <div className="relative left-12 text-[#FF7700] font-['Geist_Mono'] font-medium text-[48px] leading-[1.3]">{title}</div>

                        {/* Bitcoin */}
                        <div className="relative left-12 text-[#FFFFFF] font-['Geist_Mono'] font-light text-[20px] leading-[1.3]">{titlecomplete}</div>
                    </div>

                </div>







                {/* Price */}
                <div className="absolute left-[20px] top-[249px] w-[324px] h-[59px] text-[#FFFFFF] font-['Geist_Mono'] font-light text-[45px] leading-[1.3]">{price}</div>
            </div>
        </div>
    );
};

export default Card;
