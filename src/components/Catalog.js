import React from 'react';
import '../Css/Catalog.css'
import RecipeData from '../RecipeData';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Catalog = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div style={{ flexWrap: "wrap", display: 'flex', alignItems: "center" }}>
                {
                    RecipeData.map((item) =>
                        <div className='card-container'>
                            <img alt='' className='image-contanier' src={item.imageUrl} />
                            <div>
                                <p className='recipe-name'>{item.name}</p>
                                <p className='recipe-desc'>{item.description}</p>
                            </div>
                            <div className='price-button-container'>
                                {/* <p className='price-tag'>{item.price}</p> */}
                                {/* <button className='custom-button'
                                style={{
                                    backgroundColor:"white",fontWeight:"bold",color:"orange",borderColor:"orange"
                                }}
                            >
                                Remove
                            </button> */}
                                <button className='custom-button' onClick={handleOpen}
                                    style={{
                                        backgroundColor: "orange", fontWeight: "bold", color: "white", borderColor: "orange", fontSize: "20px"
                                    }}
                                >
                                    See Receipe
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Receipe
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        1. First, you will take all of the masala paste ingredients and add them to a grinder or a blender. Make sure you include:

                        ½ cup chopped onions
                        ¾ to 1 cup chopped tomatoes
                        1 teaspoon chopped ginger sub with 1 teaspoon of ground ginger (dry ginger powder)
                        1 teaspoon chopped garlic
                        10 to 12 cashews
                        2 tablespoons coriander leaves (cilantro)

                        1 teaspoon chopped green chilies or serrano peppers
                        4 to 5 black peppercorns
                        1 inch cinnamon (Use true cinnamon. For cassia cinnamon, use ½ inch of it)
                        1 teaspoon of coriander seeds sub with 1 teaspoon of ground coriander (coriander powder)
                        1 green cardamom – optional
                        2 cloves<br /><br />

                        2. After that, you will grind the ingredients into a smooth paste. If needed add 2 to 3 tablespoons of water while grinding the masala paste. When the paste is creamy and blended to a fine consistency, set aside until later.<br /><br />

                        3. Next add 3 tablespoons oil in a 2-litre pressure cooker or a pot. Let the oil become hot. Reduce heat to a medium-low heat. Add ½ teaspoon cumin seeds and fry until they splutter.<br /><br />

                        4. Next, add in your ground masala paste, and mix well.<br /><br />

                        5. Now you will sauté the paste mixture for about 10 to 12 minutes on a medium-low heat.

                        You want to be sure to sauté long enough for the oil to separate from the paste. The masala paste will also thicken and look glossy.<br /><br />
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}
export default Catalog;