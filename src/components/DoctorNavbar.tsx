import React, {useState} from 'react';
import { User, Share2, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ShareModal } from '../pages/ShareModal';
export const DoctorNavbar: React.FC = () => {
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
            <button className="flex flex-col items-center" onClick={()=>{handleNav('doctor/dashboard')}}>
                <Compass className={`h-6 w-6 ${activeLink === 'doctor/dashboard'? 'text-blue-500':''}`} />
                <span className="text-xs">Browse</span>
            </button>
            <button className="flex flex-col items-center" onClick={() => handleNav('share')}>
                <Share2 className={`h-6 w-6 ${activeLink === 'share'? 'text-green-500':''}`} />
                <span className="text-xs">Share</span>
            </button>
            <button className="flex flex-col items-center" onClick={()=>{handleNav('patients')}}>
                <User className={`h-6 w-6 ${activeLink === 'patients'? 'text-violet-500':''}`} />
                <span className="text-xs">Patients</span>
            </button>
            </div>
            <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />

        </div>
    )

}
