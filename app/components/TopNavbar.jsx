import React from 'react'

const TopNavbar = () => {
    return (
        <div className='topdiv w-[100%]'>
            
            <input type='checkbox' id="menu-bar"/>
            <label for="menu-bar">Menu</label>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Vision </a>
                        
                    </li>
                    <li><a href='#'>About +</a>
                        <ul>
                            <li><a href='#'>Biography</a></li>
                            <li><a href='#'>Journey</a></li>
                            <li><a href='#'>Achievements</a>
                            </li>

                        </ul>
                    </li>
                    <li><a href='#'>MyView +</a>
                        <ul>
                            <li><a href='#'>Visions</a></li>
                            <li><a href='#'>Articles</a></li>
                            <li><a href='#'>Blog</a>
                            </li>
                            <li><a href='#'>Quotes</a>
                            </li>

                        </ul>
                    </li>
                    <li><a href='#'>Press +</a>
                        <ul>
                            <li><a href='#'>Latest news</a></li>
                            <li><a href='#'>Popular</a></li>
                            <li><a href='#'>Speeches</a>
                            </li>
                            <li><a href='#'>International Converage</a></li>
                            <li><a href='#'>Quick Views</a></li>

                        </ul>
                    </li>
                    <li><a href='#'>Gallery +</a>
                        <ul>
                            <li><a href='#'>Video</a></li>
                            <li><a href='#'>Image</a></li>
                            <li><a href='#'>Old Image</a>
                            </li>

                        </ul>
                    </li>
                    <li><a href='#'>Contact</a></li>
                    
                </ul>
            </nav>

        </div>
    )
}

export default TopNavbar
