import './Card.css';

const Card = ({ title, titlecomplete, iconsvg, price, color, percentage1, percentage6, percentage12, percentage24, descricaoIMG }) => {
    return (

        <div className='flex justify-center items-center -my-10 sm:m-0'>

            <div className="scale-66 origin-center">

                <div className="relative w-122.5 h-77.75 bg-[#153535] rounded-[34px] shadow-[1px_4px_30px_8px_rgba(27,66,66,1)] bordaFigma">

                    {/* Rectangle 9 lateral */}
                    <div className="absolute right-0 top-0 w-30.5 h-77.75 bg-[#061922] rounded-[0px_34px_34px_0px] flex items-center justify-center">

                        <div className="flex flex-col items-center mb-2">
                            {/* Percentage boxes */}
                            {/* 1h */}
                            <div className="relative w-23 h-13.75">
                                <div className="absolute left-9 top-0 w-5 h-5.25 text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">1h</div>
                                <div className="absolute left-0 top-7 w-23 h-6.75 bg-[rgba(241,86,83,0.2)] border border-[#F15653] rounded-[8px]">
                                    <div className="absolute left-4.25 top-0.75 w-14.5 h-5.25 text-[#F15653] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">{percentage1}%</div>
                                </div>
                                <div className="absolute left-0 top-5.25 w-23 h-0 border-t border-[#6B74A3]"></div>
                            </div>

                            {/* 6h */}
                            <div className="relative w-23 h-13.75 mt-[15px]">
                                <div className="absolute left-8 top-0 w-7.25 h-5.25 text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">6h</div>
                                <div className="absolute left-0 top-7 w-23 h-6.75 bg-[rgba(241,86,83,0.2)] border border-[#F15653] rounded-[8px]">
                                    <div className="absolute left-4.25 top-0.75 w-14.5 h-5.25 text-[#F15653] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">{percentage6}%</div>
                                </div>
                                <div className="absolute left-0 top-5.25 w-23 h-0 border-t border-[#6B74A3]"></div>
                            </div>

                            {/* 12h */}
                            <div className="relative w-23 h-13.75 mt-[15px]">
                                <div className="absolute left-8 top-0 w-7.25 h-5.25 text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">12h</div>
                                <div className="absolute left-0 top-7 w-23 h-6.75 bg-[rgba(6,217,98,0.2)] border border-[#06D962] rounded-[8px]">
                                    <div className="absolute left-5.5 top-0.75 w-12 h-5.25 text-[#06D962] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">{percentage12}%</div>
                                </div>
                                <div className="absolute left-0 top-5.25 w-23 h-0 border-t border-[#6B74A3]"></div>
                            </div>

                            {/* 24h */}
                            <div className="relative w-23 h-13.75 mt-[15px]">
                                <div className="absolute left-8 top-0 w-7.25 h-5.25 text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">24h</div>
                                <div className="absolute left-0 top-7 w-23 h-6.75 bg-[rgba(6,217,98,0.2)] border border-[#06D962] rounded-[8px]">
                                    <div className="absolute left-5.5 top-0.75 w-12 h-5.25 text-[#06D962] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">{percentage24}%</div>
                                </div>
                                <div className="absolute left-0 top-5.25 w-23 h-0 border-t border-[#6B74A3]"></div>
                            </div>

                        </div>

                    </div>

                    <div className='absolute top-5 left-5 flex items-center'>

                        {/* Rectangle 8 */}
                        <div className="w-32.75 h-32.75 bg-[#153535] rounded-[34px] shadow-[inset_1px_4px_10px_2px_rgba(6,25,34,1)] flex items-center justify-center">
                            {/* Vector */}
                            <img src={iconsvg} alt={descricaoIMG} className='max-h-25' />
                        </div>

                        <div id="titulos" className="absolute left-27 flex flex-col justify-center leading-[1.2]">
                            {/* Titulo */}
                            <div className="relative left-12 font-['Geist_Mono'] font-medium text-[48px]" style={{ color: color }}
                            >{title}</div>

                            {/* Titulo Completo */}
                            <div className="relative left-12 text-[#FFFFFF] font-['Geist_Mono'] font-light text-[20px]">{titlecomplete}</div>
                        </div>

                    </div>



                    {/* Price */}
                    <div className="absolute left-5 top-50 text-[#FFFFFF] font-['Geist_Mono'] font-light text-[45px] leading-[1.3]">{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                </div>
            </div>

        </div>
    );
};

export default Card;
