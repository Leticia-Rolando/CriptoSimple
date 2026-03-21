import './Card.css';

const Card = ({ title, titlecomplete, iconsvg, price, color, percentage1, percentage6, percentage12, percentage24, descricaoIMG }) => {
    return (

        <div className='flex justify-center items-center -my-10 sm:m-0'>

            <div className="scale-68 origin-center">

                <div className="relative w-122.5 h-77.75 bg-[#153535] rounded-[34px] shadow-[1px_4px_30px_8px_rgba(27,66,66,1)] bordaFigma">

                    {/* Rectangle 9 lateral */}
                    <div className="absolute right-0 top-0 w-30.5 h-77.75 bg-[#061922] rounded-[0px_34px_34px_0px] flex items-center justify-center">

                        {/*Quando é vermelho: bg-[rgba(241,86,83,0.2)]  border-[#F15653] text-[#F15653]
                            Quando é verde: bg-[rgba(6,217,98,0.2)]  border-[#06D962]  text-[#06D962]  
                        */}

                        <div className="flex flex-col items-center gap-4">
                            {/* Percentage boxes */}

                            {/* 1h */}
                            <div className="flex flex-col justify-center items-center">
                                <div className=" text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">1h</div>
                                <div className=" w-23 h-0 border-t border-[#6B74A3]"></div>
                                <div className={`flex items-center justify-center w-23 h-6.75 mt-1.5 border rounded-[8px] ${percentage1 > 0 ? 'bg-[rgba(6,217,98,0.2)]  border-[#06D962]' : 'bg-[rgba(241,86,83,0.2)]  border-[#F15653]'}`}>
                                    <div className={ `w-14.5 h-5.25 font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center ${percentage1 > 0 ? 'text-[#06D962]' : 'text-[#F15653]'}` }>{percentage1}%</div>
                                </div>
                            </div>

                            {/* 6h */}
                            
                            <div className="flex flex-col justify-center items-center">
                                <div className=" text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">6h</div>
                                <div className=" w-23 h-0 border-t border-[#6B74A3]"></div>
                                <div className={`flex items-center justify-center w-23 h-6.75 mt-1.5 border rounded-[8px] ${percentage6 > 0 ? 'bg-[rgba(6,217,98,0.2)]  border-[#06D962]' : 'bg-[rgba(241,86,83,0.2)]  border-[#F15653]'}`}>
                                    <div className={ `w-14.5 h-5.25 font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center ${percentage6 > 0 ? 'text-[#06D962]' : 'text-[#F15653]'}` }>{percentage6}%</div>
                                </div>
                            </div>

                            {/* 12h */}
                            <div className="flex flex-col justify-center items-center">
                                <div className=" text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">12h</div>
                                <div className=" w-23 h-0 border-t border-[#6B74A3]"></div>
                                <div className={`flex items-center justify-center w-23 h-6.75 mt-1.5 border rounded-[8px] ${percentage12 > 0 ? 'bg-[rgba(6,217,98,0.2)]  border-[#06D962]' : 'bg-[rgba(241,86,83,0.2)]  border-[#F15653]'}`}>
                                    <div className={ `w-14.5 h-5.25 font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center ${percentage12 > 0 ? 'text-[#06D962]' : 'text-[#F15653]'}` }>{percentage12}%</div>
                                </div>
                            </div>

                            {/* 24h */}
                            <div className="flex flex-col justify-center items-center">
                                <div className=" text-[#FFFFFF] font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center">24h</div>
                                <div className=" w-23 h-0 border-t border-[#6B74A3]"></div>
                                <div className={`flex items-center justify-center w-23 h-6.75 mt-1.5 border rounded-[8px] ${percentage24 > 0 ? 'bg-[rgba(6,217,98,0.2)]  border-[#06D962]' : 'bg-[rgba(241,86,83,0.2)]  border-[#F15653]'}`}>
                                    <div className={ `w-14.5 h-5.25 font-['Geist_Mono'] font-medium text-[16px] leading-[1.3] text-center ${percentage24 > 0 ? 'text-[#06D962]' : 'text-[#F15653]'}` }>{percentage24}%</div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='absolute top-5 left-5 flex items-center'>

                        {/* Rectangle 8 */}
                        <div className="w-32.75 h-32.75 bg-[#153535] rounded-[34px] shadow-[inset_1px_4px_10px_2px_rgba(6,25,34,1)] flex items-center justify-center">
                            {/* Vector */}
                            <img src={iconsvg} alt={descricaoIMG} className='max-h-25' />
                        </div>

                        <div id="titulos" className="absolute left-27 flex flex-col justify-center items-center leading-[1.2]">
                            {/* Titulo */}
                            <div className="relative left-12 font-['Geist_Mono'] font-medium text-[48px]" style={{ color: color }}
                            >{title}</div>

                            {/* Titulo Completo */}
                            <div className="relative left-12 text-[#FFFFFF] font-['Geist_Mono'] font-light text-[20px]">{titlecomplete}</div>
                        </div>

                    </div>



                    {/* Price */}
                    <div className="absolute left-5 top-50 text-[#FFFFFF] font-['Geist_Mono'] font-light text-[45px] leading-[1.3]">{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\u00a0/g, '')}</div>
                </div>
            </div>

        </div>
    );
};

export default Card;
