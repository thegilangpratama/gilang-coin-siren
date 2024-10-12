import ProfileCard from "../molecules/profile-cards";

const ProfileCardsStack: React.FC = () => {
    return (
        <div className="relative h-[350px] w-[350px] md:h-[400px] scale-50 md:scale-100">
            {/* First Card - Scaled Down */}
            <div className="absolute z-10 transform -translate-x-40 translate-y-2 scale-75">
                <ProfileCard
                    name="Abhishek Gupta"
                    designation="마케팅"
                    experience="2y+"
                    imageSrc="/profile-card/avatar.png"
                    flagSrc="/profile-card/flag.png"
                    skills={["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]}
                />
            </div>

            {/* Second Card */}
            <div className="absolute z-30 transform translate-x-4 translate-y-4">
                <ProfileCard
                    name="Abhishek Gupta"
                    designation="마케팅"
                    experience="2y+"
                    imageSrc="/profile-card/avatar.png"
                    flagSrc="/profile-card/flag.png"
                    skills={["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]}
                />
            </div>

            {/* Third Card */}
            <div className="absolute z-10 transform translate-x-40 translate-y-2 scale-75">
                <ProfileCard
                    name="Abhishek Gupta"
                    designation="마케팅"
                    experience="2y+"
                    imageSrc="/profile-card/avatar.png"
                    flagSrc="/profile-card/flag.png"
                    skills={["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]}
                />
            </div>
        </div>
    );
};

export default ProfileCardsStack