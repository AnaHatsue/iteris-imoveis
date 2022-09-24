import { useEffect, useState } from "react";
import ImovelCard from "../../components/ImovelCard";
import { getImoveis } from "../../services/imovelApiServices";
import {useNavigate} from 'react-router-dom';

function ImoveisPage() {
    const navigate = useNavigate();
    const[listaImoveis, setlistaImoveis] = useState([]);

    useEffect(() => {
        getImoveis().then((data) => {
            setlistaImoveis(data);
        });
    }, []);
    //O array vazio indica que somente irá executar somente uma vez.

    function irParaDetalhe(id) {
        navigate(`/imoveis/${id}`);
    }

    return ( 
        <div className="listaImoveis">
            <h1>Página de Imóveis!</h1>
            {listaImoveis.map((item, i) => 
                <div key={i} onClick={() =>              
                irParaDetalhe(item.id)}
                className="listaImoveis_imovelCard">
                    <ImovelCard imovel={item} />
                </div>
            )}
        </div>
     );
}

export default ImoveisPage;