import Listing from '../models/listingModel.js'
import { errorHandler } from '../utills/error.js'

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
    res.send('delete listing');
}

export const updateListing = async (req, res, next) => {
    res.send('update listing');
}

export const getListing = async (req, res, next) => {
    res.send('get listing');
}

export const getListings = async (req, res, next) => {
    res.send('get listings');
}
