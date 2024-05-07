import { deleteAndAddSlider } from "../../src/model/sliderModel";
import { toObjectId } from "../../src/utils";

export default async function handler(req, res) {
    try {
        const { slides } = req.body;
        const sliderData = await deleteAndAddSlider(slides);
        return res.status(200).json({ status: true, response_code: 200, message: `Slider has been updated`, data: [] });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(400).json({ status: false, response_code: 400, message: error.message, data: [] });
    }
}