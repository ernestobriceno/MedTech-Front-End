import React, {useState} from 'react';
import { Heart, Share2, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ShareModal } from '../pages/ShareModal';
export const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState('dashboard');
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleNav=(text: string)=>{
        setActiveLink(text);
        if (text !== 'share') {
            navigate(`/${text}`);
        } else {
            setIsShareModalOpen(true);
        }
    }
    return(
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t">
            <div className="flex justify-around items-center h-16">
            <button className="flex flex-col items-center" onClick={()=>{handleNav('dashboard')}}>
                <Compass className={`h-6 w-6 ${activeLink === 'dashboard'? 'text-blue-500':''}`} />
                <span className="text-xs">Browse</span>
            </button>
            <button className="flex flex-col items-center" onClick={() => handleNav('share')}>
                <Share2 className={`h-6 w-6 ${activeLink === 'share'? 'text-green-500':''}`} />
                <span className="text-xs">Share</span>
            </button>
            <button className="flex flex-col items-center" onClick={()=>{handleNav('health')}}>
                <Heart className={`h-6 w-6 ${activeLink === 'health'? 'text-red-500':''}`} />
                <span className="text-xs">Health</span>
            </button>
            </div>
            <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />

        </div>
    )

}
